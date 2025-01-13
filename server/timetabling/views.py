from django.http import HttpResponse

def home(request):
    print("This is a message from the back-end.")  # Print to the console
    return HttpResponse("Welcome to the Backend API!")
