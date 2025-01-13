# Academic Scheduling Software

## Overview
This project is a web-based application designed to streamline the process of creating and managing academic schedules for university faculties. It automates course and exam scheduling, ensures conflict detection, and provides user-friendly panels for administrators, professors, and students. The system is optimized for the unique constraints and requirements of Iranian universities, particularly the Faculty of Mathematics and Computer Science at Amirkabir University of Technology.

---

## Features

### **1. Initial Data Management**
- Input course information (name, professor, capacity, required equipment).
- Record classroom details (capacity, equipment, location).
- Log professors' availability and constraints.

### **2. Course Scheduling Management**
- Automated semester scheduling with constraint handling.
- Conflict detection and resolution with alternative suggestions.
- Editable schedules for administrators.

### **3. Exam Scheduling Management** (in future versions)
- End-of-term exam scheduling.
- Mid-term exam scheduling and viewing.
- Integration of exam schedules with academic calendars.

### **4. User Panels**
- **Admin Panel**: Manage schedules, resolve conflicts, and view warnings.
- **Professor Panel**: View personal schedules and request changes. (in future versions)
- **Student Panel**: View class and exam schedules, select courses, and provide feedback. (in future versions)

### **5. Alert and Notification System**
- Automated conflict alerts for administrators.
- Notifications for schedule changes via email or SMS.
- Immediate notifications for urgent updates.

### **9. Reporting and Data Analysis** (in future versions)
- Statistical reports on class and equipment usage.
- Comparative reports for different scheduling scenarios.
- Exportable reports in Excel and PDF formats. 

---

## Technical Details

### **Technology Stack**
- **Frontend**: React.js.
- **Backend**: Node.js.

### **Development Tools**
- **Version Control**: Git, GitHub/GitLab.
- **Project Management**: Jira.
- **Deployment**: Docker.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Amirali-Sajadi/Timetable-Scheduling
   ```
2. Navigate to the project directory:
   ```bash
   cd scheduling-software
   ```
3. Install dependencies:
   ```bash
   npm install # for frontend
   pip install -r requirements.txt # for backend (if using Python)
   ```
4. Configure environment variables in a `.env` file (e.g., database credentials, API keys).
5. Start the development server:
   ```bash
   npm start # for frontend
   python manage.py runserver # for backend (if using Django)
   ```
6. Access the application at `http://localhost:3000`.

---

## Usage

1. **Administrators**: Manage schedules, handle conflicts, and oversee system operations.
2. **Professors**: View schedules and request modifications as needed. (in future versions)
3. **Students**: View class schedules, select courses, and provide feedback.  (in future versions)


---

## Contact
For questions or support, please contact:
- **Scrum Master**: [Raha Gharedaghi](mailto:rahagharehdaghi@gmail.com)
- **Contributer**: [Amirali Sajadi](mailto:s.amiralisajadi@gmail.com)
- **Contributer**: [Aria Kalantari](mailto:ariakalantari82@gmail.com)
- **Contributer**: [Kiana Ebrahimi](mailto:ebrahimikiana81@gmail.com)
- **Contributer**: [Mehrshad Hassani](mailto:Hassanimehrshad1382@gmail.com)
- **GitHub Repository**: [Link to Repo](https://github.com/Amirali-Sajadi/Timetable-Scheduling)
