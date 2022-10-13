import React from "react";

const Azulindahalf = () => {
    return (
        <>
            <div class="container">
                <div class="container-fluid formContainer">
                    <form id="loader">
                        <div class="print-box">
                            <div class="print-outter">
                                <div class="print-lines">
                                    <div class="print-inner">
                                        <div class="menu-headline">
                                            Menu Title:{" "}
                                        </div>
                                        <div class="menu-subtitle">
                                            Menu Title 2:{" "}
                                        </div>
                                        <div class="menu-bg">Menu Type: </div>
                                        <div class="row">
                                            <div class="col-6-md col-6-xl col-6-sm">

                                                {/* left section */}
                                            </div>
                                            <div class="col-6-md col-6-xl col-6-sm">

                                                {/* //right section */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="col-sm-6 col-sm-push-6">
                <div class="footer-inner">
                    <ul class="footer-icons">
                        <li>
                            <span class="bullet veg"></span>
                            {/* <font-awesome-icon icon="apple-alt"/>VEGETARIAN */}
                        </li>
                        {/* <li><span class="bullet gf"></span><font-awesome-icon icon="bread-slice" /> Gluten-free</li> */}
                    </ul>
                    <div class="menu_notice_wrap outter-edit rel style1">
                        <div class="menu_footer_notice"></div>

                        <span class="inner-edit"></span>
                    </div>

                    <div class="menu_notice_wrap2 outter-edit rel style1">
                        <div class="menu_footer_notice2">
                            {/* {{ menu.footer_notice2 }} */}
                            <span class="inner-edit"></span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Azulindahalf;
