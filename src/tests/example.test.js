import { render, screen, cleanup } from '@testing-library/react';
import PurchaseBtn from '../components/buttons';
import Navbar from '../components/navbar';

test('should render PurchaseBtn component', () => {
    render(<PurchaseBtn/>);
    const purchaseBtnElement = screen.getByTestId('buttonTestOne');
    expect(purchaseBtnElement).toBeInTheDocument();
})

test('should render NavBar component', () => {
    render(<Navbar/>);
    const NavbarElement = screen.getByTestId('NavbarTest');
    expect(NavbarElement).toBeInTheDocument();
})