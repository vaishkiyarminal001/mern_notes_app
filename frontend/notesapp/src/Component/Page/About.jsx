// About.js
import React from "react";
import "./About.css"; 
import "../mediaquery.css";

export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
      Welcome to our Notes Application! We are a team of dedicated individuals 
      passionate about helping you organize and manage your notes effectively. 
      Our mission is to provide you with a user-friendly platform to capture, 
      store, and access your important thoughts, ideas, and reminders.
      </p>


      <h1>Key Features</h1>
      <p>
  Our Notes Application offers the following features:
</p>
<ul>
  <li>Create Notes: Write down your thoughts and ideas quickly and conveniently. Our application allows you to capture and save notes effortlessly.</li>
  <li>Categorize Notes: Organize your notes into categories to keep them structured. Whether it's work-related notes, personal reminders, or creative brainstorming, we've got you covered.</li>
  <li>Filter and Search: Easily find the notes you're looking for with our filtering and search features. No more scrolling through endless pages of notes.</li>
  <li>Importance Levels: Prioritize your notes by marking them as "Most Important" or "Less Important." Stay focused on what matters most.</li>
  <li>User-Friendly Interface: We've designed our application with simplicity in mind. Whether you're tech-savvy or new to digital note-taking, you'll find our platform intuitive and user-friendly.</li>
  <li>Secure and Private: Your notes are important and personal. We prioritize your privacy and data security, ensuring that your information remains safe.</li>
</ul>



      <h1>Join Us on This Journey</h1>
      <p>We're excited to have you as part of our notes-taking community. 
        Your feedback and suggestions are invaluable to us as we continue 
        to improve and enhance our application.If you have any questions, 
        need assistance, or want to share your thoughts, please don't hesitate 
        to reach out to us. We're here to make your note-taking experience seamless 
        and enjoyable.
        Thank you for choosing our Notes Application. Let's make note-taking a breeze together!
        </p>

      
    </div>
  );
}
