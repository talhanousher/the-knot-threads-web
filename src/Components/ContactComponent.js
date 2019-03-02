import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


class Contact extends Component {
    render() {
        return (
            <div className="container" >
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            Gulshan e Maymar , Karachi , Pakistan<br />
                            <i className="fa fa-phone"></i>:+92 345 2329916<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:abdulrehman@gmail.com"> abdulrehman@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.903450261865!2d67.11352021447837!3d24.90127474975427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33922488f3725%3A0x3bfde63eb356ebc0!2sMillennium+Mall!5e0!3m2!1sen!2s!4v1551517217440" width="600" height="450"></iframe>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+923452329916"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:abdulrehman@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;