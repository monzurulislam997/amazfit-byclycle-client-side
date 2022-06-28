import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3>Difference between javascript and nodejs</h3>
            <p> 1. JavaScript is a language that runs inside web browsers  and is used as a client-side development language. On the Otherhand, Node js is a Javascript runtime environment, which is depended on Google’s V8 JavaScript environment.</p>
            <p>2. Javascript can be used server side and client side.But NodeJs is an open source, cross-platform environment that allows only to create server-side applications  using JavaScript.</p>
            <p>3. JavaScript can be run on any other browser engine like Spider monkey for Firefox,  V8 for Google Chrome and sfari.  Node JS can be run only on V8 of Google Chrome.</p>

            <h3> Differences between sql and nosql databases.</h3>
            <p>1.SQL databases are  supports management, analysis.Data are stored with table wise. NoSQL databases allows to maintain and retrieve structured, unstructured for different purposes.</p>
            <p>2. SQL databases support Structured Query Languages. But, NonSQL does not have any declarative query language.</p>
            <p>3.Vertically Scalable. NoSQL horizontally Scalable .</p>
            <p>4. 	SQL is best suitable for complex projects, multi-row transactions.NoSQL is best for small projects and  for unstructured  documents. Not ideal for complex queries.</p>
            <p>SQL databases does not follow distribution of data.On the otherhand,NoSQL databases are created to flow data distribution like repetition, partition.</p>

            <h3>What is the purpose of jwt and how does it work?</h3>

            <p>JSON Web Token (JWT) is an open standard  that defines a compact and self-contained way for securely transmitting information .
                They contain JSON objects which have the information that needs to be shared. Each JWT is also signed using cryptography to ensure that the JSON contents.
            </p>
            <p>The identity provider generates a JWT certifying user identity and Resource server  verifies the authenticity of the token using secret  key.



                User sign-in using username and password or google/facebook.

                User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization .
                Resource server then verifies the authenticity of the token using the secret key.</p>
        </div>
    );
};

export default Blogs;