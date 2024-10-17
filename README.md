## Forensic_lingusitics journal
#Table of Contents
1.Introduction
2.Technologies Used
3.Installation Guide
4.Project Structure
5.Routing Configuration
6.API Integration
7.User Authentication
8.Features
9.Usage Instructions
10.Contributing
11.License
12.Conclusion

##1. Introduction
This project serves as a journal for forensic linguists, providing resources, updates,events, case studies, details about the field , top universities, case studies, ethical issues and consultation service, genres of crimes, and learning materials all is related to legal professions. The application is designed to be user-friendly and accessible, incorporating various interactive elements to enhance user experience.

##2. Technologies Used
Frontend Technologies:
HTML, CSS, React.js
Routing:
React Router for navigation, Link.
API:
json-server for a mock API to manage data.
Styling:
Google Fonts for typography.
Font Awesome for icons.
#npm install --save @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
EX:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<FontAwesomeIcon icon={faCoffee} />

State Management:
React hooks (useState, useEffect) for managing component states.

##3. Installation Guide
Prerequisites
Node.js (version v18.20.4) installed on your machine.
npm (Node Package Manager) for managing dependencies.
"axios": "^1.7.7",
    "js-cookie": "^3.0.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-router-dom": "^6.27.0",
    "react-scripts": "5.0.1",
    "react-slick": "^0.30.2",
    "slick-carousel": "^1.8.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "api": "json-server --watch db.json --port 5000"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
#Steps to Install
Clone the Repository:
bash
Copy code
3git clone https://github.com/Muna-Elmetwally/Forensic_ling.git
Navigate to the Frontend Directory:
bash
Copy code
cd forensic_linguistics/frontend
Install Dependencies:
bash
Copy code
npm install
Start the Mock Server: In a new terminal window, start the json-server to serve the mock API:
bash
Copy code
json-server --watch db.json --port 3001
Run the Application: In the original terminal window, start the React application:
bash
Copy code
npm start
Access the Application: Open your browser and navigate to http://localhost:3000 (incase it's without deployment).
##4. Project Structure
The project follows a modular structure to facilitate maintainability:
puplic/: index.html
src/: Contains all source files.
package.json
db.json
style.css
indes.css
index.json
components/: Reusable components like Header, Footer, and Slider.
pages/: Contains the main pages such as Home, header, about,......
hooks/: Custom hooks for reusable logic.
assets/: Stores images, styles, and other static assets.
##5. Routing Configuration
Router Setup
The application utilizes BrowserRouter from React Router for navigation.

Key Routes:
/: Home Page
and many more.............

##Example Route Configuration
javascript
Copy code
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SignUp from "./pages/SIGNUP/Sign_up";
import LogIn from "./pages/LOGIN/Log_in";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import { AuthProvider } from "./pages/AuthContext"; // Import the AuthProvider
import SearchBar from "./components/Search/SearchBar";
import About from "./pages/About/About";
import MenuBar from "./pages/MENU/NavMenu";
import PostDetails from "./pages/singlePost/PostDetails"; // The new PostDetails component
import Post from "./pages/post/Post";
import Services from "./pages/services/Services"; // Import your Services component
import Career from "./pages/career/Career";
import UniversityPage from "./pages/University/University";
import CaseStudies from "./pages/case studies/caseStudies";
import Legal from "./pages/Legal/Legal";

import "./style.css";

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <SearchBar />
        <div className="app-container">
          {/* MenuBar always remains visible */}
          <div className="menu-bar-container">
            <MenuBar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="SearchBar" element={<SearchBar />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/About" element={<About />} />
            <Route path="/posts" element={<Post />} />
            <Route path="/post" element={<PostDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/University" element={<UniversityPage />} />
            <Route path="/CaseStudies" element={<CaseStudies />} />
            <Route path="/Legal" element={<Legal />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

##6. API Integration
The project uses json-server to create a mock API for data management.

db.json Structure >>>> for dash board and research bar and server has to be activated by writing on terminal:
#npm run server
or
#npm run api
json
Copy code
{
  "users": [
    {
      "id": "2e94"
    },
    {
      "id": "aa0d",
      "email": "jkjmh",
      "password": "kujbkhk"
    },
}

## 7. User Authentication

The application uses cookies for session management, storing user authentication details.

Login Mechanism
A simple login form can be implemented, storing user credentials in cookies upon successful authentication.

 // Mock API logic, replace with your actual authentication logic
        if (response.data.email === email) {
          setMessage("Logged in successfully!");
          logIn();
          // Store user email in local storage
          localStorage.setItem("userEmail", email);
          Cookies.set("userEmail", email, { expires: 30 });
          navigate("/");
        } else {
          setMessage("Invalid email or password.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setMessage("There was an error submitting the form.");
      })
      .finally(() => {
        // Reset form fields
        setLoading(false);
        setEmail("");
        setPassword("");
        setAccept(false);
      });
  }

  return (
    <div className="logIn-parent">
      <div className="register">
        <form onSubmit={submit} style={{ textAlign: "center" }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
          {password.length < 8 && accept && (
            <p className="error">Password must be at least 8 characters</p>
          )}
          <div className="button" style={{ textAlign: "center" }}>
            <button id="button" type="submit" disabled={loading}>
              {loading ? "Logging..." : "Log In"}
            </button>
          </div>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}


##8. Features
Dynamic Navigation: Toggle navigation using state hooks.
Responsive Design: Ensures compatibility across various devices.
Interactive UI: Utilizes Font Awesome icons for enhanced visuals.
Journal Entries: Users can view and manage journal entries dynamically.

##9. Usage Instructions
Navigating the App
Home Page: Overview and introduction to the journal.
consultation page : Form for user inquiries and feedback.

##10. Contributing
Guidelines for Contributions
Fork the repository and create a new branch for your feature.
Ensure your code follows the project's style and standards.
Submit a pull request with a description of your changes.
Issue Tracking
Report any bugs or feature requests through the GitHub Issues page.

11. License
This project is licensed under the MIT License. See the LICENSE file for more information.

12. Conclusion
This documentation outlines the essential aspects of the Forensic Linguistics Journal project. Feel free to reach out with any questions or for further assistance.
