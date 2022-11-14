import { render, screen } from '@testing-library/react';
import App from './App';
import Homepage from "./components/homepage/homepage"
import AddProduct from "./components/AddProduct/AddProduct"
import Signup from "./components/signup/signup"
import ViewProduct from "./components/ViewProduct/ViewProduct"

test('renders landing/login page', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Vendor Log In/);
  expect(screen.getByRole("button", { name: "LOG IN" })).toBeInTheDocument;
  expect(screen.getByRole("button", { name: "REGISTER" })).not.toBeDisabled();
});

test('renders Add Product and its components', () => {
  render(<AddProduct />);
  const linkElement = screen.getByTestId("add");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Add Product/);
  expect(screen.getByRole("button", { name: "Add Product" })).toBeInTheDocument;
  const inputNode = screen.getByPlaceholderText('Title');
  expect(inputNode).toBeInTheDocument();
  const inputNode2 = screen.getByPlaceholderText('Rating');
  expect(inputNode2).toBeInTheDocument();



});


test('renders homepage', () => {
  render(<Homepage />);
  const linkElement = screen.getByTestId("homepage");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Homepage/);
  expect(screen.getByRole("button", { name: "ADD PRODUCT" })).toBeInTheDocument;
  expect(screen.getByRole("button", { name: "UPDATE PRODUCT" })).not.toBeDisabled();
  expect(screen.getByRole("button", { name: "VIEW PRODUCT" })).not.toBeDisabled();
  expect(screen.getByRole("button", { name: "LOG OUT" })).not.toBeDisabled();
  expect(screen.getByRole("button", { name: "DELETE PRODUCT" })).not.toBeDisabled();

});


test('renders Register page and its components', () => {
  render(<Signup />);
  const linkElement = screen.getByTestId("signup");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Vendor Register/);
  expect(screen.getByRole("button", { name: "REGISTER" })).not.toBeDisabled();
  const inputNode = screen.getByPlaceholderText('Vendor Name');
  expect(inputNode).toBeInTheDocument();
  const inputNode2 = screen.getByPlaceholderText('E-mail Address');
  expect(inputNode2).toBeInTheDocument();
  const inputNode3= screen.getByPlaceholderText('Password');
  expect(inputNode3).toBeInTheDocument();

});

test('renders View Product Page and its components', () => {
  render(<ViewProduct />);
  const linkElement = screen.getByTestId("view");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole("heading")).toHaveTextContent(/Product List/);
  expect(screen.getByRole("img")).toBeInTheDocument();
 
});





