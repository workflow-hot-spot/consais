import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
//To add space in markdown content use:
/* 
\`\`\`
  
\`\`\`

*/
const blogPosts = [
  
    {
  id: 4,
  title: "SAM vs YOLO: Understanding Computer Vision Models",
  author: "Nitish",
  date: "2026-05-28",
  content: `
# **SAM vs YOLO Computer Vision Models**

SAM (Segment Anything Model) and YOLO (You Only Look Once) are both groundbreaking computer vision models, but they were built to solve fundamentally different problems. While recent versions of YOLO have started overlapping with SAM's capabilities, their core philosophies, architectures, and ideal use cases remain distinct.

\`\`\`
   
\`\`\`

\`\`\`   \`\`\` _Primary Task & Output_

*   **YOLO:** Primarily an **Object Detection** model. It's main goal is to draw a bounding box around recognized objects and classify what they are (e.g., "Car", "Person", "Defective Part").
*   **SAM:** A **Promptable Segmentation** model. Its main goal is to cut out the exact pixel-level shape (a mask) of an object. It doesn't inherently know *what* the object is (it doesn't classify); it just knows how to perfectly separate an object from its background based on a prompt (like a click, a box, or text).

\`\`\`
   
\`\`\`

\`\`\`   \`\`\` _Speed and Performance_

*   **YOLO:** Designed for **Real-Time** performance. It is incredibly fast and lightweight, making it the industry standard for live video feeds, edge devices, IoT cameras, and factory floor monitoring.
*   **SAM:** A massive **Foundation Model** (built on Vision Transformers). It is computationally heavy and relatively slow. While smaller variants (like MobileSAM or FastSAM) exist, standard SAM is generally not meant for high-FPS real-time video processing without heavy cloud GPU compute.

\`\`\`
   
\`\`\`

\`\`\`   \`\`\` _Training and Flexibility_

*   **YOLO:** Requires **Supervised Fine-Tuning**. To detect a specific object (e.g., a specific type of screw on an assembly line), you need to collect hundreds or thousands of images, manually label them with bounding boxes, and train the YOLO model to recognize them.
*   **SAM:** **Zero-Shot Capable**. Because it was trained on 11 million images and 1 billion masks, SAM can segment almost any object right out of the box without any extra training. You just point at an object, and SAM outlines it. 

\`\`\`
   
\`\`\`

\`\`\`   \`\`\` _The Ultimate Synergy: YOLO + SAM_

In modern computer vision pipelines, engineers often **combine both models**. 

Because SAM needs a "prompt" to know what to segment, and YOLO is incredibly fast at finding where things are, a common architecture is:
1. **YOLO** scans the image in real-time and detects an object, drawing a bounding box around it.
2. The coordinates of that bounding box are automatically passed as a "prompt" to **SAM**.
3. **SAM** then generates a perfect, pixel-accurate mask of the object inside that box. 
  `
    },
    {
  id: 1,
  title: "Developer Assistant",
  author: "Nitish",
  date: "2025-06-25",
  // Add more posts here as needed  
  content: `
 
# **Debugpy With Containers**
It is like having an assistant, trained by you, working for you exactly the way you trained him and works all the time  without getting tired.
Sounds like AI? Well it is not self-trained but it is as hard working and useful.


\`\`\`
   
\`\`\`

\`\`\`   \`\`\` _Why within containers?_

VS Code supports using debugpy as a debugger out of the box. So if you are not using containers during development then you can go that route and skip this document.

If you are using containers for development (Doesn't matter if you are using containers for deployment or not) read this and practice this.

It is a huge advantage if development can be done in an environment that is close to the deployment environment as possible.  SIt would be great if we can develop the code with the backdrop of the exact version of OS, python plugins and container configurations as we would have on production. In fact once you are done you can actually share the image with your co-developer or testers for testing instead of them having to rebuild an image. That's a key advantage of having images, isn't it?
 


\`\`\`
   
\`\`\`

\`\`\`   \`\`\` _We already have debugpy!!_


Debugpy is the plugin we intend using for debugging. We are using VS Code and it does come with plugins that help configure debugpy very easily. However, using debugpy with VS Code with containers is not out of the box.  Here is a step by step setup for you to achieve the same.


\`\`\`
   
\`\`\`

\`\`\`   \`\`\` _Add to the launch configurations_ \`\`\`   \`\`\`
Open your project folder. Follow the VS Code menu as given here:
RUN > Open Configuration
This wil open the file {project folder}/.vscode/launch.json.
To this file add the following configuration json:
 
\`\`\`
{
 //This can be any label you like
"name": "FastAPI In Container Debug",
"type": "debugpy",
"request": "attach",
"connect": {
  "host": "localhost", 
  //Amend port as per your Docker-compose
  "port": 5678
},
"pathMappings": [
    {
    // Replace with the path to your local FastAPI code
"localRoot": "\${workspaceFolder}/{your app folder}", 
    // Replace with the WORKDIR in your Dockerfile
"remoteRoot": "/{app folder}"   
     }
   ],
"justMyCode": true
    }
\`\`\`

_Make note of the variable values that you need to update in the JSON above _ 


\`\`\`
   
\`\`\`

\`\`\`   \`\`\` _Open & map ports for debugpy_

Add this to your ports section in docker-compose.yml:
\`\`\`
docker-compose:
    Ports:
    - "8000:8000"  //Or whatever your existing mapping are  
    - "5678:5678"  //The relevant part for debugpy
\`\`\`
The above maps a port 5678 on your machine's OS to the port 5678 on containers' runtime. You could of course choose any sensible port combintation as you wish. Nothing hard and fast about 5678. Just that the numbers are a sequence.
  


\`\`\`
   
\`\`\`

\`\`\`   \`\`\` _Pull in the debugpy module_
We need to install *debugpy* in our runtime's environment.
There are two options:
    1. Add  it to your requirements.txt or 
    2. Add the following in the docker-compose right after installing requirements.txt
  \`\`\`
    pip install debugpy
  \`\`\`
  The second approach helps you keep dev dependencies outside the requirements.txt which may contain all other dependencies that are required in production.


\`\`\`
   
\`\`\`

\`\`\`   \`\`\` _Make it easy to switch_
The following two changes help us to make the debug mode conditional:
1. Add en environment variable in #.env# (or whatever env file you are pulling in in your docker-compose/podman-compose):
\`\`\`
DEBUG_MODE=1 # Conditional debugging 
\`\`\`
2. Modify your main.py module code to use the above environment variable:
\`\`\`
if __name__ == "__main__": 
  if os.getenv("DEBUG_MODE",0) == "1":  # if .env not found or does not have variable then 0 
debugpy.listen(("0.0.0.0", 5678)) # Listen on all interfaces, port 5678     
  print("Waiting for debugger to attach")     
  Debugpy.wait_for_client() # Important: Pause execution until debugger attaches.  print("Debugger attached")
\`\`\`


\`\`\`
   
\`\`\`

\`\`\`   \`\`\` _Modify launch command_

The show starts like this (from within your docker-compose/podman-compose):
\`\`\`
command: python -Xfrozen_modules=off -m debugpy  --listen 0.0.0.0:5678 --wait-for-client -m uvicorn --host 0.0.0.0 --port 8000 --reload  --workers 1 app.main:app
// change your uvicorn port and path the to app suitably
\`\`\`

The above command launches the module debugpy and listens on port 5678 (the port that you specified on the container side). It waits for the client (a knock knock from the VS Code side). Once it gets ping from the client (the debugpy client on VS Code side) it launches the module uvicorn with 1 worker. The reload option helps your changes show up in your code but do note that it involves server restart, connections re-initialisation and state loss.


\`\`\`
   
\`\`\`

\`\`\`   \`\`\` _Launch_

1. Open your project in VS Code. Open main.py to place a break point in any setup part of the code. 
2.Spin  up your container (docker compose up -d ....)
2. Go to VS Code menu Run > Start Debugging. You will get a set of options drop down on the top of the left panel just below the menu bar. It says "RUN AND DEBUG". Select your option and click the green button.
3. Your VS Code should show you left panel coming alive with variables sub panel populated and the call stack as well. If everything goes fine then you should see the execution pause at the break point you placed.
4. Edit code and you should see the changes reflect in your application.
  `
    },
    {
  id: 2,
  title: "Your Next Developer Assistant",
  author: "Nitish",
  date: "2025-05-11",
  // Add more posts here as needed  
  content: `
No it is not Cursor! It is the humble TDD partner Pytest

**Why Automate?**

Testing  is what you always do. Why not do it systematically? You ask “how?”. The answer is “it depends”.  First lets cover the mechanics. 

By mechanics we imply having knowledge of the tools we can use and how to use them. It skips the part of  your decision as to what to test and when to test. That we will cover in the later section. Okay, so the tools that we can rely upon are the following:

\`\`\`   \`\`\` Landscape of Possibilites
Jest for the front end for React based applications.

Vitest is another alternative for the front end for react based applications running with the vite dev server.

Pytest is a well known option for any python based web & crud applications. It is perhaps the only option for Fastapi.

We are going to talk about Pytest! 
\`\`\`
 
\`\`\` 
**Installation**
> Add the following to your requirements.txt (or requirements.in in case you are using pip-compile)

1. httpx
2. aiohttp
3. aiofiles
4. pytest
5. pytest-mock
6. pytest-timeout
7. pytest-asyncio

I am assuming these dependencies/plugins will get installed 

- python-dotenv
- python-multipart
- httpx-ws

\`\`\`   
 
\`\`\` 
**Tests Folder Location**
>
Your tests can be anywhere and pytest will look everywhere unless if you tell it to look in a specific place.
There is a default format for file, function and clas naming but you can always specify your own.
These changes can be included in a file pytest.ini at the root of your project or whereever you launch pytest from.
>
Here's a typical fastapi folder structure for organising your tests:
>
your_fastapi_project/

├── main.py             # Your main FastAPI application file

├── app/                # Or your main application package

│   ├── __init__.py

│   └── main.py

│   └── routers/

│   └── models/

├── tests/      # Your test folder 

│   ├── __init__.py     # Make 'tests' a Python package (optional but 
good practice)

│   ├── test_main.py

│   ├── test_users.py

│   ├── conftest.py     # For shared fixtures and configurations (optional)

├── requirements.txt

└── pyproject.toml 
/ pytest.ini 
/ setup.cfg  # Pytest 

\`\`\`   \`\`\` pyttest.ini
>
Required only if you don't follow the conventional format or have custom markers then this file becomes necessary at the folder where you launch pytest from. Lets look at a pytest config file:
\`\`\`\`
[pytest]

pythonpath = .
python_files = test_*.py *_test.py
python_classes = Test*
python_functions = test_*
testpaths =
    tests
addopts = -v --strict-markers
#custom markers
markers =
    smoke: marks tests as smoke tests (quick sanity check)
    regression: marks tests as regression tests
    slow: marks tests as slow-running
    api: marks tests related to API endpoints

\`\`\`\`

The above file is optional and most of its entries are optional but the example given is instructional. It tells the convention that you must follow if you are not using pytest.ini.  

The configuration helps you keep your command line command short because the repeat options get appended automatically.

\`\`\`   \`\`\` Setting up pytest with VS Code
>
Go to Run > Add Configuration and add this json (uses debugpy):
\`\`\`\`
 {
            "name": "Python: Debug Pytest (Specific Tests Folder)",
            "type": "debugpy",
            "request": "launch",
            "module": "pytest",
            "args": [
                "-v",
                "-s",
                "\${workspaceFolder}/tests"
            ],
            "console": "integratedTerminal",
            "justMyCode": false,
            "env": {
                "TESTING_ENV": "true"
            }
        },
\`\`\`\`

\`\`\`   \`\`\` 
**How to launch?**

\`\`\`   \`\`\` _Conditional Configuration:_
>
Before we launch it we need to do add some code for setup and conditional changes . So we have to set an environment variable that could be called "TESTING_ENV".
Like this:

*set TESTING_ENV=true //windows

*export TESTING_ENV=true //linux/mac
>
This is useful in case you do not wish to use the exact set up as your production setup while testing. You can accordingly change a few dependencies. Here is the code that helps you switch from using your  mariadb to in-memory db SQLite.

\`\`\`\`

if os.getenv("TESTING_ENV") != "true": # use .env file in testing mode. In prod env file would already be read into os.env
    load_dotenv() # Load from .env file in project root
    print("In prod mode")
DATABASE_URL = os.environ.get("DATABASE_URL", NON_CONTAINER_DB_URL )

if os.getenv("TESTING_ENV") == "true":
    # Use an in-memory SQLite database for tests
    SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"
    print(f"[DB Config] Using SQLite for testing: {SQLALCHEMY_DATABASE_URL}")
elif DATABASE_URL:
    SQLALCHEMY_DATABASE_URL = DATABASE_URL
    print(f"[DB Config] Using DATABASE_URL from .env: {SQLALCHEMY_DATABASE_URL}")
else:
    # Fallback or error if DATABASE_URL not set and not testing
    raise ValueError("DATABASE_URL environment variable is not set for non-testing environment.")

# --- SQLAlchemy Engine and Session setup ---
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False} if "sqlite" in SQLALCHEMY_DATABASE_URL else {},
    # \`check_same_thread=False\` is crucial for SQLite with FastAPI/Uvicorn,
    # as FastAPI might handle requests in different threads.
    poolclass=StaticPool,
    echo=False # Set to True to see SQL statements in console (useful for debugging)
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

\`\`\`\`

Note the comments with regard to the echo key, you might want to switch this if you wish to see db tables creation details.
Specifically for SQLite there is an option with regard to Foreign Key constraints. 



\`\`\`   \`\`\`
_The Launch_

From within your venv you can simply launch 
*_pytest_
or
*_pytest_ [options] 
or
*use "_Start Debugging_" menu of VS Code if you have set up the pytest configuration. You will see an option of the debug configuration. Select the correct option and press the go button. 

_Ensure the correct venv for VS Code or that the python version that it launches is same as the one in your venv else there could be silent failure._

You will see test process run and give you a report on the terminal

\`\`\`   \`\`\` **What are Markers?**
> Markers are arbitrary labels that you can assign to your tests. Then when you launch a test run you can specify conditions using these lables to filter out and run select tests. Cool, isn't it?
Here's an example of using a custom marker "smoke" as specified in the pytest.ini above.
>
\`\`\`

import pytest

# A custom marker for "smoke tests"
@pytest.mark.smoke 
def test_user_login():
//do some test
    assert response.json has 
# tests/test_network_call.py
import pytest
import httpx #For making the actual network call
import pytest_asyncio # For running async tests

@pytest_asyncio.fixture(scope="module")
async def live_app_url():

    # For simplicity, we'll assume it's running at this URL.
    return "http://localhost:8000" # Replace with your actual app URL

@pytest.mark.asyncio
async def test_response_has_datasize_key(live_app_url):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{live_app_url}/data-info")

    assert response.status_code == 200
    response_json = response.json()

    # Assertion 1: Check if 'datasize' key exists in the JSON response
    assert "datasize" in response_json, "Response JSON does not contain 'datasize' key"
\`\`\`

\`\`\`
 
\`\`\`

While you can make custom markers, there are some predefined markers that can be very useful. A few of them are:
* pytest.marker.skip : skip this test
* pytest.marker.xFail: test known to fail (as of now)
* pytest.marker.timeout: Specifies max time permitted

Look at an example of timeout marker in use:

\`\`\`

import pytest
import time
from fastapi.testclient import TestClient
from app.main import app # Assuming your FastAPI app is here

client = TestClient(app)

# This test will pass as it completes within the 2-second timeout.
@pytest.mark.slow
@pytest.mark.timeout(2)
def test_fast_route():
    response = client.get("/some-endpoint")
    assert response.status_code == 200
\`\`\`

If the test does not complete in 2 seconds it will be reported as failed.

\`\`\` 
 
\`\`\` 
**Fixtures**
> Fixtures are support functions for running tests. These functions provide context that you might want to setup or mock. For example, you could replace your target DB with SQLite (not touching the dev db), or have a client session set up so that network calls can be made with an active session (JWT or standard cookie based session).

In other words, these are useful objects or functions that testing process needs to use or invoke before doing their own job. These are known by their function name and are defined in the tests folder in a file named **conftest.py**. They are annotated something like this: _@pytest_asyncio.fixture(scope="module")_



\`\`\` 
 
\`\`\` 
**Fixtures have a lifecycle** 
>
They get created and they get destroyed.
When this exactly happens? Creation is when they are encountered the first time as a dependecy in a test function. Destruction is based on their scope. 

The following scopes are possible:
1. module
2. class
3. function (default scope)
4. package
5. session

In the example annotation given above the fixture will be created the first time it is required inside a module and will be destroyed on exit from the module of the testing routines.

\`\`\`  
 
\`\`\` 

**Examples**
\`\`\`

import pytest

# Example 1: Basic Function-scoped Fixture using in-built fixture

@pytest.fixture
def temp_file(tmp_path): #  tmp_path is a built-in pytest fixture
    """Creates a temporary file for tests and cleans it up."""
    file_path = tmp_path / "test.txt"
    file_path.write_text("Hello, test!")
    print(f"\nCreated temporary file: {file_path}")
    yield file_path # Provide the file path to the test
    # Code after 'yield' runs as teardown
    file_path.unlink() # Delete the file
    print(f"Cleaned up temporary file: {file_path}")

# Example 2: Fixture for a FastAPI TestClient
# (Often placed in conftest.py)
from fastapi.testclient import TestClient
from main import app 

@pytest.fixture(scope="module") # Scope explained below
def client():
    """Provides a TestClient for FastAPI application."""
    print("\nSetting up FastAPI test client...")
    with TestClient(app) as test_client:
        yield test_client
    print("Tearing down FastAPI test client...")

\`\`\`
\`\`\`   
  
\`\`\`
**How are fixtures used?** 

Simply pass the required fixture as an argument. Check the code in the markers section above for the test function _test\_response\_has\_datasize\_key_ 
We will see more examples of usage when we see some tests.

\`\`\` 
  
\`\`\` 
**Command Line Options**
> Don't ignore these. Can speed up your quest.Here are some of the most useful command line options (there are just too many):

* -v : verbose
* -s :
* --strict-markers : checkfor typos for markers 
* -k pattern      : run only those test functions that contain the pattern 
* -x : halt tests at first failure

\`\`\`   
 
\`\`\` 
**Testing Models**
>
Lets suppose we have an app for office management that has staff, teams and departments. Lets suppose we wish to check that the staff model has been defined correctly. Then we would write code like this:
\`\`\`

from sqlalchemy.exc import IntegrityError
from..models import  Staff, Department
from sqlalchemy.orm import Session

def test_create_staff_model(test_db_connection): 
    staff = Staff(
        name="Test Staff",
        email="test@example.com",
        #... other required fields...
    )
    test_db_connection.add(staff)
    test_db_connection.commit()
    assert staff.staff_id is not None  # Check if the staff was added

\`\`\`
or 
\`\`\`

def test_create_a_department_directly(test_db_connection:Session):
    """
    Tests creating a Department directly in the test database session.
    """
    # 1. Create an instance of your Department model
    new_department = models.Department(department_name="Human Resources")
    db_session = test_db_connection

    # 2. Add the new object to the session
    db_session.add(new_department)

    # 3. Commit the session (this will write it to the in-memory SQLite DB)
    #    In a test, the transaction will be rolled back by the db_session fixture teardown.
    db_session.commit()

    # 4. Refresh the object to get its generated ID (e.g., department_id)
    db_session.refresh(new_department)

    # 5. Assertions: Verify the department was created correctly
    assert new_department.department_id is not None
    assert isinstance(new_department.department_id, int)
    assert new_department.department_name == "Human Resources"


\`\`\`
or even check relationships
\`\`\`
def test_user_relationship_with_address(test_db_connection):
    #Test the relationship between User and Address.
    with test_db_connection as session:
        user = models.Customer(name1="testuser",phone1="19910101", emailid="testuser@example.com")
        address = models.Address(house_no="123", colony_id=1, customer_id=user.customer_id)  # Assuming a colony with ID 1 exists
        session.add(user)
        session.add(address)
        session.commit()

        # Check if the relationship is established correctly
        assert address.customer == user
        assert user.addresses == [address]
  
\`\`\`

\`\`\` 
  
 \`\`\`
 **Configuration in DB Session fixtures**
>The fixture that the above test function uses is defined in **conftest.py** like so:

\`\`\`\`
@pytest.fixture(scope="function")
def test_db_connection(test_engine):
    connection = test_engine.connect()
    transaction = connection.begin()
    connection.execute(text("PRAGMA foreign_keys=ON"))
    session = sessionmaker()(bind=connection)
    yield session
    session.close()
    transaction.rollback()
    connection.close()
\`\`\`\`

Here's an important configuration to note. While testing if you wish to ensure FKs then you have to keep foreign_keys as ON as shown below.

Note that its scope if function but it can be session and module as well and should work just fine.

\`\`\` 
 
\`\`\` 
**Testing Routes (_aka API End points_)**

Lets start with an example:
\`\`\`

import httpx
import pytest

async def test_create_staff_route(async_client: httpx.AsyncClient):  # Use the test_session fixture
    # Test data
    staff_data = {
        "name": "Test Staff",
        "email": "test@example.com",
    }

    # Make the API call
     response = await async_client.post("/api/v1/staff/", json=staff_data)
    
    assert response.status_code == 201  # Check for successful creation

    # Optionally, verify the data in the response
    created_staff = response.json()
    assert created_staff["name"] == staff_data["name"]
    #... other assertions...

    \`\`\`

To run the above test one could run it like so:
*  pytest -m asyncio  
* pytest -k create_staff_route

Since only this test definition carries the marker  "asyncio" so only this will run by the first command given above. The second command will run all tests that contain the specified string.

Before we sign off, notice the use of _async_client_. Very useful to compare above sync code with the below async code:
\`\`\`
from fastapi.testclient import TestClient
from..main import app
#from..database import get_db 
#from.. import models, schemas

client = TestClient(app)
def test_create_staff_route():  # Use the test_session fixture
    # Test data
    staff_data = {
        "name": "Test Staff",
        "email": "test@example.com",
       
    }

    # Make the API call
    response = client.post("/api/v1//staff/", json=staff_data)
    assert response.status_code == 201  # Check for successful creation

    # Optionally, verify the data in the response
    created_staff = response.json()
    assert created_staff["name"] == staff_data["name"]
    .
\`\`\`
>

The secret is about using httpx.asyncClient. In this example we have used it as a fixture defined in configtest.py like so (in an earlier example you will see the async client being instantiated inline):

\`\`\`
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger("pytest")
logger.setLevel(logging.DEBUG)
logger.debug("reading the conftest")

@pytest_asyncio.fixture(scope="module")
async def async_client(test_engine, mock_auth_scopes) -> AsyncGenerator[httpx.AsyncClient, None]:
    # test_engine and mock_auth_scopes ensure the DB and auth are set up
    
    async with httpx.AsyncClient(transport = httpx.ASGITransport(app=app), base_url="http://test") as client:
        yield client
\`\`\`
\`\`\` 
 
\`\`\` 
**Full Code Base Not Ready?**
Something is always in the "To-Do" list. You are not alone. However, you can still test your code.
You wish to test a functionality that calls a route R but that in turn depends on external API call to a server your colleague is yet to build. In that case you need to use mocks.
\`\`\`

# app/routers/employee.py
from fastapi import APIRouter
from .. import services

router = APIRouter()

@router.get("/employee_joining_details/{employee_id}")
def get_joining_details(employee_id: int):
    # This function makes a real network call
    dept = services.get_employee_dept_from_external_api(employee_id)
    doj = services.get_employee_doj_from_external_api(employee_id)

    return {"dept": dept, "doj": doj}

# tests/test_employee_details_api.py
def test_employee_joining_details_success(client, mocker): # client is a fixture
    """
    Test the employee endpoint by mocking the external service call.
    """
    # 1. Use MagicMock (via mocker) to patch the service function
    mock_get_temp = mocker.patch(
        "app.services.get_employee_doj_from_external_api",
        # Tell the mock to return a fake doj
        return_value={"month": 6, "year": 2022}  
        
    )

    # 2. Use the 'client' fixture to make the request
    response = client.get("/employee_joining_details/39")

    # 3. Assert the API response
    assert response.status_code == 200
    assert response.json() == {"dept": "tech", "doj": {"month":6,"year":2022}}

    # 4. Assert that the mocked function was called correctly
    mock_get_temp.assert_called_once_with(39)

Notice that you don't need to import MagicMock. However, you would only need to from unittest.mock import MagicMock if you wanted to create a standalone mock object manually in your test, like this:
_my_manual_mock = MagicMock()_.
\`\`\`
 
\`\`\`  
**What all can we test for?**
>
Here are some most common assertions:
Of course, here are the key assertions you can make with \`pytest\`, which enhances Python's standard \`assert\` statement for more detailed and readable test reports.


\`\`\`  
 
\`\`\`
✅ Basic Comparisons and Membership

These are the most frequent assertions you'll use for checking values and contents.

  * **Equality**: \`assert a == b\`
  * **Identity**: \`assert a is b\` (checks if they are the same object in memory)
  * **Comparisons**: \`assert a > b\` or \`assert a <= b\`
  * **Truthiness**: \`assert item\` (for \`True\`) or \`assert not item\` (for \`False\`)
  * **Membership**: \`assert item in collection\` (checks if an item is in a list, dict, string, etc.)

\`\`\`
#python

def test_basic_assertions():

    name = "pytest"
    features = ["fixtures", "plugins", "asserts"]
    assert len(name) == 6
    assert "plugins" in features
\`\`\`
 
\`\`\`  
  
\`\`\`
🎯 Data Structures

You can directly assert the contents of dictionaries and other data structures. \`pytest\` provides detailed diffs on failure.

  * **Dictionary Keys/Values**: \`assert my_dict["key"] == "expected_value"\`
  * **Subset**: \`assert {"key1": "val1"}.items() <= my_dict.items()\`
  * **Type Checking**: \`assert isinstance(my_variable, list)\`

 

\`\`\`python
def test_dict_assertion():
    response = {"status": "ok", "data": [1, 2, 3]}
    assert response["status"] == "ok"
    assert isinstance(response["data"], list)
\`\`\`

 

\`\`\`   
 
\`\`\`
🔢 Numeric Assertions

For numbers, especially floating-point numbers where precision is an issue, \`pytest\` has a special helper.

  * **Approximate Equality**: Use \`pytest.approx\` to compare floating-point numbers.

 

\`\`\`python
import pytest

def test_float_approximation():
    # Avoids precision errors like 0.1 + 0.2 != 0.3
    assert 0.1 + 0.2 == pytest.approx(0.3)
\`\`\`

 
\`\`\` 

 
\`\`\`
⚠️ Exceptions and Warnings

A crucial part of testing is verifying that your code fails correctly.

  * **Expecting an Exception**: Use the \`pytest.raises\` context manager to assert that a block of code raises a specific exception. The test only passes if the exception is raised.
  * **Expecting a Warning**: Use \`pytest.warns\` to check that code generates an expected warning.

<!-- end list -->

\`\`\`python
import pytest

def test_exception_handling():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        1 / 0

def test_for_warnings():
    with pytest.warns(DeprecationWarning):
        # code that is expected to issue a warning
        pass
\`\`\`

\`\`\`   \`\`\` Signing off
Can't run above code directly, you will have to write your test functions.

The code depends on staff routes, model and these in turn depend on the dependencies and more.
  `
    },
    {
  id: 3,
  title: "Customer Notifications Chaos? No More!",
  author: "Nitish",
  date: "2025-04-15",
  content: `**EENS**
We built an enterprise notification emitting system and helps reduce friction at the NBFC BizFunds.com. Composing, controlling, altering and dispatching RBI mandated and other notifications is now a breeze
\`\`\`
 
\`\`\`


_Motivation_

You know, an eco-system of APIs have a gateway to make things manageable & secure, and high traffic websites have a VIP (virtual IP) or the BFF design pattern and so on, we reasoned that an enterprise composed of a large number of information-systems and micro-services would need to have a centralised listener.
\`\`\`
 
\`\`\`

_What does it do?_

A listener (or a universal sink) for events. This listener can then emit notifications.
If a centralised gateway for emitting notifications would not be available, then PMs, the marketing team and the business folks, the compliance gang would go mad orchestrating runaway or missed messages.
Hence this product and we decided to call it the EENS - Enterprise Events Notification System.
What kind of notifications?
Notifications here mean the creating and dispatching of human readable messages in the form of emails, SMS, app notifications and so on. That is where the current evolution of the product stands but it needs to go further.
These emails and SMS could be augmented with whatsapp messages, telegram messages or even API calls or creation of an event in a message queue (or topic) on ActivMQ or Kafka. So you have an opportunity to chain events from a central location just like you have the beauty of chaining security rules in a centralised firewall. All those benefits accrue to this paradigm.
\`\`\`
 
\`\`\`

**Advantages of EENS**

That it is a _centralised listener_ (to ensure high availability all you need to do is deploy it with an Active Passive configuration using a master-slave DB & Filesystem) for the enterprise events of interest is not the sole advantage. Which in fact is a big win but there's more. 
( Possibly you can achieved if you simply use Kafka, RabbitMQ or something similar).
 
The other key goals that this product achieves for you include the following:

-	We wanted to be able to design messages ( =notifications) to be sent to users in design time or think time after development and deployment of the event triggering service. This decoupling from development cycle helps. A lot.

-	The design of messages has to be simple (use some WYSIWYG tool) and outside the purview of developers. Aim was/is that PMs can do this task. Brings the cost of change way down.

-	Each event should be able to trigger different messages to different set of users. One to many relationships, that is. With the ability to switch off any one or more of them as required.

-	Selection of recipients needed to be flexible - pick up details from event payload, or hard code a value or use some simple rule table to select the recipient. An example of rule-based recipient selection is this: If the invoice approval is for an amount greater than $100K then send message to the CFO.

-	Selection of content is also flexible - pick up details from event payload, or hard code a value or use some simple rule table to select the recipient. An example of rule-based content selection is this: If the delay in payment is more than 30 days then send final warning to the client.
\`\`\`
 
\`\`\`

**Test Harness Included**

Additionally, We have always admired software designs, development tools and practices that offer robust testing as an inherent part of them. Keeping that admiration in mind this tool too has a feature to allow testing for new composed messages before you push them to production.
\`\`\`
 
\`\`\`

**Work in progress**

Another feature in the infancy (and neglected) is the reporting of stats such as events count, messages type triggered, per event type and so on. A streamlit app on snowflake could be a quick makeover there.
Ability to send attachments or links (with a defined TTL) with the notifications.
Let us know
Interesting stuff, no? Any product out there that you use for achieving this goal? Do let us no @ support@consais.com
  
  `// Add more posts here as needed  
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
<Header />
<main className="flex-1">
  {/* Banner Section */}
  <section className="relative bg-gradient-section py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
<Badge variant="outline" className="mb-4">Blog</Badge>
<h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
  Insights & Updates
</h1>
<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
  Explore articles, stories, and updates from our team and community.
</p>
    </div>
  </section>

  {/* Equity Research Callout */}
  <section className="py-10 bg-background border-b border-border/50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Link to="/blog/equityresearch">
        <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                Interested in Indian Equity Research?
              </h3>
              <p className="text-muted-foreground text-sm">
                Browse our sector-wise equity research and market intelligence reports.
              </p>
            </div>
            <Button variant="outline">
              View Reports
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </Link>
    </div>
  </section>

  {/* Blog Posts Section */}
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
  {blogPosts.map(post => (
    <Card key={post.id} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
<CardContent className="p-6 flex flex-col h-full">
  <h2 className="text-2xl font-bold text-foreground mb-2">{post.title}</h2>
  <p className="text-sm text-muted-foreground mb-4">
    By {post.author} on {post.date}
  </p>
<div className="text-muted-foreground flex-1">
    <ReactMarkdown>{post.content}</ReactMarkdown>
  </div>
     </CardContent>
    </Card>
  ))}
</div>
    </div>
  </section>
</main>
<Footer />
    </div>
  );
};

export default BlogPage;