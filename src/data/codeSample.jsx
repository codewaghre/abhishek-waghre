export const defaultCode = `
// Edit only the variables below
const name = "Enter Your Name"
const email = "Enter Your Email"
const data = "Hey, type ........."

// Do not modify below this line
const sendmail = (name, email, data) => {
    if (!name || !email || !data) {
        throw Error("Please fill in all required fields.");
    }

    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
        throw Error("Invalid email format.");
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", data);
    console.log("\\n Thank you, " + name + "!");
    console.log("We've successfully received your message.");
    console.log("Our team will review it and get back to you shortly at " + email + ".");
    console.log("Have a great day! 🌟");
}

sendmail(name, email, data);
`;