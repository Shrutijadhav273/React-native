What is JWT (JSON Web Token)?

A JWT (JSON Web Token) is a secure token used to:

Authenticate users
Share information between client & server

Structure of JWT

A JWT has 3 parts:

HEADER.PAYLOAD.SIGNATURE

1️⃣ Header
{
  "alg": "HS256",
  "typ": "JWT"
}
2️⃣ Payload (Data)
{
  "userId": 123,
  "email": "test@gmail.com",
  "role": "user"
}
3️⃣ Signature (Security 🔐)

Created using:

Header + Payload + Secret Key

👉 Prevents tampering