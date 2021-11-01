import React, { useRef, useState } from "react"
import {Form, Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const nameRef = useRef();
  const Date_of_BirthRef = useRef();
  const AddressLine1Ref = useRef();
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Form onSubmit={handleLogout}>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={ nameRef } required />
            </Form.Group>
            <Form.Group id="Date of Birth">
              <Form.Label>Address</Form.Label>
              <Form.Control type="DD/MM/YYYY" ref={ Date_of_BirthRef} required />
            </Form.Group>
            <Form.Group id="Address Line 1">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control type="text" ref={ AddressLine1Ref} required />
            </Form.Group>
            <Button className="w-100" type="submit">
              SUBMIT
            </Button>
          </Form>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  )
}
