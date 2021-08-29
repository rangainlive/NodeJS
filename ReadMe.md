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
    Redirecting Requests:
    Parsing Request Bodies:
        Streams & Buffers:
    Understanding Event Driven Code Execution:
    Blocking and Non-Blocking Code:
    Node.js Looking Behind the Scenes:
        Single Thread, Event Loop & Blocking Code
            Node.js uses only one single JavaScript thread (process in OS).
            some code which accesses the file system -> working with files often is a task takes longer -> by doing this upon an incoming request, a second request might have to wait because not able to handle it yet or it even gets declined.
        Behind the Scenes:
            the event loop automatically started by node.js when your program starts, we don't to do that explicitly.
            this is responsible for handling event callbacks though, so all these nice functions we basically added thus far in create server for example, the event loop is rsponsible for basically running that code when a certain event occurs you could say, it's aware of all these callbacks and basically well, execute said code. 
            thus doesn't help us with long taking file operation -> it's important to understand that this operation is not handled by the event loop, just the callback that we might have defined on write file once it's done, that code will be handled in event loop but that code will finish fast.
            so basically the event loop will only handle callbacks that contain fast finshing code.
            Instead our file system operation and a couple of other long taking operations are sent to a worker pool which is also spun up and managed by node.js automatically.
            this worker pool is responsible for all the heavy lifting -> is kind of totally detached of our JavaScript code you could say and it runs on different threads, it can spin up multiple threads, it's closely intervened with your operating system you're running the app on -> so this is really detached from your code and this worker pool is therefore doing all the heavy lifting.
            If you're doing something with a file, well a worker from that pool will take care and will do its job totally detached from your code and from the request and from the event loop. The one connection to the event loop we will have though is that once the worker is done, so for example once we read a file, it will trigger the callback for that read file operation and since the event loop is responsible for the events and the callbacks, this will in the end up in the event loop, so there nodejs will then basically execute the appropriate callback.
        Event Loop:
            It has certain orders which it goes through the callbacks.
            1. at the begining of each new iteration it checks if there are any timer callbacks it should execute. 
            2. it checks other pending callbacks ( Execute I/O - related Callbacks that were deferred)
                I/O -> Input & Output (Disk & Network Operations (~ Blocking Operations)).
            -> Now it's important to understand that nodejs will leave that phase at a certain point of time and that can also mean that if there are too many outstanding callbacks, it will continue its loop iteration and postpone these callbacks to the next iteration to execute them. After working on these open callbacks hoping finishing them all, it will enter a poll phase.
            3. Poll phase : (Retrive new I/O events, execute their callbacks)
            basically a phase where nodejs will look for new IO events and basically do its best to execute their callbacks immediately if possible.
            -> Now it that's not possible, it will defer the execution and basically register this as a pending callback, so this is how that works.
            -> it also check if there are any timer callbacks due to be executed and if that is the case, it will jump to that timer phase and excute them right away. so, it can actually jump back there and not finish the iteration otherwise it will continue next setimmediate callbacks will be executed in a so-called check phase.
            4. Check Phase: (Execute setimmediate() callbacks..)
             -> bit like set timeout or set interval, just that it will execute immediately but always after any open callbacks have been executed.
            5.Close callbacks: (Execute all 'close' event callbacks)
                -> close events are basically handled separately or their callbacks are handled separately.
            6. exit ( process.exit)

    Using Node Modules System:
    Module Summary:
        1. How the Web works:
            Client -> Request -> Server -> Response -> Client
        2. Program Lifecycle & Event Loop:
            -> Node.js runs non-blocking JS code and uses an event-driven code ("Event Loop") for running your logic.
            -> A Node program exits as soon as there is no more work to do
            -> Note: The createServer() event never finishes by default
        3.Asynchronous Code:
            -> JS code is non-blocking
            -> Use callbacks and events => Order changes!
        4. Requests & Responses:
            -> Parse request data in chunks (Streams & Buffers)
            -> Avoid "double responses".
        5. Node.js & Core Modules:
            -> Node.js ships with multiple core modules (http, fs, path,...)
            -> Core Modules can be imported into any file to be used there
            -> Import via require("module")
        6. The Node Module System:
            -> Import via require ("./path-to-file") for custom files or require("module") for core & third-party modules.
            -> Export via module.exports or just exports (for multiple exports)


#Lesson 03 - Debugging:
    1. NPM Scripts

    2. NPM Packages:
        nodemon -> npm install nodemon --save-dev
            -> package used to re-run the project on save.
    3.Global Features vs Core Modules vs Third-Party Modules
        The last lectures contained important concepts about available Node.js features and how to unlock them.

        You can basically differentiate between:

        Global features: Keywords like const or function but also some global objects like process

        Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")

        Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way

        Global features are always available, you don't need to import them into the files where you want to use them.

        Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

        Example:

        const fs = require('fs');

        You can now use the fs object exported by the "fs" module.

        Third-party Modules need to be installed (via npm install in the project folder) AND imported.

        Example (which you don't need to understand yet - we'll cover this later in the course):

        // In terminal/ command prompt
        npm install --save express-session
        // In code file (e.g. app.js)
        const sessions = require('express-session');

    4.
    5. Global & Local npm Packages
        In the last lecture, we added nodemon as a local dependency to our project.

        The good thing about local dependencies is that you can share projects without the node_modules folder (where they are stored) and you can run npm install in a project to then re-create that node_modules folder. This allows you to share only your source code, hence reducing the size of the shared project vastly.

        The attached course code snippets also are shared in that way, hence you need to run npm install in the extracted packages to be able to run my code!

        I showed that nodemon app.js would not work in the terminal or command line because we don't use local dependencies there but global packages.

        You could install nodemon globally if you wanted (this is NOT required though - because we can just run it locally): npm install -g nodemon would do the trick. Specifically the -g flag ensures that the package gets added as a global package which you now can use anywhere on your machine, directly from inside the terminal or command prompt

# Lesson_04-Express.js:
    1. What is Express?
        - it actually doesn't have a built-in way of handling or parsing that data but it makes it easy to install another package that can easily be hooked into our project that will then do the parsing for us.

    Framework: 
        Helper functions, tools & rules that help you build your application.
    Alternatives for Express.js =>  1. Vennila Node.js
                                    2. Adonis.js (laravel inspired framework for node.js)
                                    3. Koa
                                    4. Sails.js
    -> highly flexible 
    -> doesn't add too much functionalities out of the box
