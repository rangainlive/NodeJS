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