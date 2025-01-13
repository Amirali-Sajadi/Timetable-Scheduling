# api/auth_views.py
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    """
    Registers a new user:
    Expects JSON: { "username": "...", "password": "...", "email": "..." (optional) }
    """
    data = request.data
    username = data.get('username')
    password = data.get('password')
    email = data.get('email', '')

    # Basic validations
    if not username or not password:
        return Response({"detail": "Username and password required."},
                        status=status.HTTP_400_BAD_REQUEST)

    # Check if user exists
    if User.objects.filter(username=username).exists():
        return Response({"detail": "User already exists."},
                        status=status.HTTP_400_BAD_REQUEST)

    # Create user
    user = User.objects.create_user(
        username=username,
        password=password,
        email=email
    )

    # Optionally: immediately create an auth token for them
    token, created = Token.objects.get_or_create(user=user)

    return Response({
        "message": "User registered successfully",
        "token": token.key
    }, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    """
    Logs in an existing user:
    Expects JSON: { "username": "...", "password": "..." }
    Returns a token if credentials are valid.
    """
    data = request.data
    username = data.get('username')
    password = data.get('password')

    user = authenticate(username=username, password=password)
    if user is not None:
        # Credentials are valid, get or create token
        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            "message": "Login successful",
            "token": token.key
        }, status=status.HTTP_200_OK)
    else:
        return Response({"detail": "Invalid credentials."},
                        status=status.HTTP_401_UNAUTHORIZED)
