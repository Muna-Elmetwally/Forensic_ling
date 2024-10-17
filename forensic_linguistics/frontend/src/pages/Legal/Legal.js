import React from "react";
import "./legal.css";

const Legal = () => {
  return (
    <div className="legal">
      <main>
        <section id="introduction">
          <h2>Introduction</h2>
          <p>
            Forensic linguistics is the application of linguistic knowledge to
            legal issues, often involving the analysis of language in legal
            contexts. This field raises significant legal and ethical questions
            that must be addressed to ensure justice and uphold the integrity of
            linguistic evidence in court.
          </p>
        </section>

        <section id="legal-issues">
          <h2>Legal Issues</h2>
          <h3>Overview of Forensic Linguistics in the Legal System</h3>
          <p>
            Forensic linguistics plays a crucial role in legal proceedings by
            providing expertise on language-related matters. It can assist in
            criminal investigations, analyze threats, or assess the authenticity
            of documents.
          </p>

          <h3>Key Legal Challenges</h3>
          <p>
            One of the primary challenges is the admissibility of linguistic
            evidence in court. Courts often require that such evidence meets
            certain standards of reliability, leading to debates about the
            methods used by forensic linguists.
          </p>
        </section>

        <section id="ethical-considerations">
          <h2>Ethical Considerations</h2>
          <h3>Ethical Responsibilities of Forensic Linguists</h3>
          <p>
            Forensic linguists must maintain objectivity and impartiality in
            their analyses, ensuring that their work is not influenced by
            external pressures or biases. Confidentiality and obtaining consent
            from parties involved in the analysis are also critical ethical
            considerations.
          </p>

          <h3>Potential Ethical Dilemmas</h3>
          <p>
            Conflicts of interest and misrepresentation of linguistic analysis
            can pose significant ethical challenges in this field.
          </p>
        </section>

        <section id="resources">
          <h2>Resources</h2>
          <p>
            Links to relevant articles, papers, or books on legal and ethical
            issues in forensic linguistics will be available here.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Legal and Ethical Issues in Forensic Linguistics</p>
        <p>Contact: info@example.com</p>
      </footer>
    </div>
  );
};

export default Legal;
