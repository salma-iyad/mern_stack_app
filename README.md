# My app documentation

### **Application Overview**

This documentation covers the architecture and deployment process of a MERN stack application, consisting of a MongoDB database, an Express.js server, and a React.js frontend.

### **Architecture**

**Components:**

1. **MongoDB** - NoSQL database that stores application data.
2. **Express.js** - Backend framework running on Node.js for handling server-side logic and API requests.
3. **React.js** - Frontend library for building the user interface, running in the client's browser.

**Services:**

- **`mongodb_server`**: MongoDB database service.
- **`server`**: Node.js/Express.js application that serves the backend logic.
- **`client`**: React.js application that provides the frontend

### **Deployment**

**Prerequisites:**

- Docker and Docker Compose installed on your system.

**Environment Setup:**
Ensure that the **`.env`** file is configured with the correct environment variables:

```makefile

MONGODB_USER=yourUsername
MONGODB_PASSWORD=yourPassword
MONGODB_DATABASE=yourDatabase
MONGODB_DOCKER_PORT=27017

```

**Deployment Steps:**

1. **Build and Run Containers:**
Navigate to the root of the project directory and run:
    
    ```bash
    docker-compose up --build
    ```
    
    This command will:
    
    - Build the images for the frontend, backend, and set up the MongoDB service if not already done.
    - Start the services as defined in the **`docker-compose.yml`** file.
2. **Access the Application:**
    - The React frontend can be accessed at **`http://localhost:3000`**.
    - The Express backend is available at **`http://localhost:5000`**.
3. **Shut Down:**
To stop and remove the containers, networks, and volumes created by **`docker-compose up`**, run:
    
    ```bash
    
    docker-compose down
    
    ```
