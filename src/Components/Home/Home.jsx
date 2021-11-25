import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import UserReviews from '../Dashboard/User/UserReview/UserReviews/UserReviews';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Offers from './Offers/Offers';
import Services from './Services/Services';

const Home = () => {
    const { loading } = useAuth();
    if (loading) {
        return (
            <div className="spinner text-center">
                <Spinner animation="grow" variant="primary" />
            </div>
        );
    } else {
    return (
        <>
            {/* Home page  */}
            <Banner></Banner>
            <Offers></Offers>
            {/* <Services></Services> */}
            {/* <About></About> */}
            <UserReviews></UserReviews>
            <Contact></Contact>

        </>
    );
 };
}

export default Home;