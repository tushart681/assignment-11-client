import React from 'react';

const Blog = () => {
    return (
        <div>
           <h1>Difference between SQL and NoSQL?</h1>
           <br />
           <h1>SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL</h1>
           <br />
           <h1>What is JWT, and how does it work?</h1>
           <br />
           <h1>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</h1>
           <br />
           <h1>What is the difference between javascript and NodeJS?</h1>
           <br />
           <h1>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</h1>
           <br />
           <h1>How does NodeJS handle multiple requests at the same time?</h1>
           <br />
           <h1>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. </h1>
        </div>
    );
};

export default Blog;