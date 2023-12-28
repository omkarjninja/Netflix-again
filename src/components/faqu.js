import React, { useState } from "react";
import "./faq-styles.css";
import FAQ from "./faqq";

 function Faqu() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Ninjafy?",
      answer:
        "Ninjafy is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
      open: true
    },
    {
      question: "How much does Ninjafy cost?",
      answer: "Watch Ninjafy on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
      open: false
    },
    {
      question:
        "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Ninjafy account to watch instantly on the web at Ninjafy.com from your personal computer or on any internet-connected device that offers the Ninjafy app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Ninjafy with you anywhere.",
      open: false
    },
    {
      question:
        "How do I cancel?",
      answer: "Ninjafy is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      open: false
    },
    {
      question:
        "What can I watch on Ninjafy?",
      answer: "Ninjafy has an extensive library of feature films, documentaries, TV shows, anime, award-winning Ninjafy originals, and more. Watch as much as you want, anytime you want.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
export default Faqu;