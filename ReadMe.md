# Node JS - The Complete Guide:

# Lesson 01:
1. To Run the Node file (command):
    node file_name (HelloWorld.js)

2. File System Functionalities:
    Node JS enables us to work with file system functionalities.
    First we need import that. Syntax for that
        const fs = require("fs");

    WriteFileSync(): 
        -> which is a method made available in the File System object,
        -> This method will write a file in our hard drive.
        -> The argument it wants - the path to the file and including the filename.

        fs.WriteFileSync("hello.tex", "Hello from Node.js file");

3. JavaScript on the Server:
    Functions on the Server-side:
        Database connectivity.
        Authentication
        Input Validation
        Your Business Logic
    
    Node JS - 
        -> not limited to running code on a server, It's a javascript runtime, we can execute any javascript code with nodejs and also often use nodejs for other code, for example local utility scripts or build tools.
        -> Node JS is a great tool to writing utility strips. We can write, read and manipulate files.
    Role:
        Run Server: Create Server & Listen to Incoming Requests.

            Php -> you have extra tools like apache or nginx which run the servers which listen to incoming requests and then execute your php code,

            Node JS -> does the both (it's listening, and it then also does whatever you want to do in your code).

        Business Logic: Handle Requests, Validate input, Connect to Database.

        Responses: Return Responses (Rendered HTML, JSON,...)



# Lesson 02: Node JS Basics

    Request and Response done through some protocols. => HTTP, HTTPS

    # 1. HTTP : Hyper Text Transfer Protocol
        A Protocol for Transferring Data which is understood by Browser and Server.

    # 2. HTTPS : Hyper Text Transfer Protocol Secure
        HTTP + Data Encryption (during Transmission)

    CoreModules:
        http -> Launch a server, send requests
        https -> launch a SSL server
        fs, 
        path, 
        os

    Node.js Program Lifecycle:
        node app.js -> start script -> parse code, register variables & functions -> event loop (keeps on running as long as there are event listeners registered) -> process.exit (close the server)
    
    Controlling the Node.js Process:

    Routing Request:
