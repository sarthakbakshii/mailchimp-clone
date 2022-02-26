import { useSelector } from "react-redux";
import "./styles/home.scss";
export const Home = () => {
    

    return (
        <>
        <div style={{height:"80px"}}></div>
            <div>
                <div id="top">
                    <div id="width50_50">
                        <p>
                            Get down to business and grow sales
                        </p>
                        <p >
                            Engage your customers and boost your business with Mailchimp's advanced, yet easy-to-use marketing
                            platform.
                        </p>
                        <button>Sign Up</button>
                        <a href="#">Compare Plan</a>
                    </div>

                    <div>
                        <img src="https://eep.io/images/yzco4xsimv0y/1EtxFXD75VSkkEteOY4gkZ/a8043f8a285f70b6652f5a69424bf2ae/MTSB_Hero_Image_Floats-lbFKcJgs.png?w=1520&fm=webp&q=80" />
                    </div>
                </div>

                <div >
                    <div id="white_main">
                        <div id="why_mailchimp">
                            <h1>
                                Why Mailchimp
                            </h1>
                            <p>We’re built for growing businesses. Put our marketing and sales tools behind your idea, dream,
                                brand, or business and we’ll help you share it with the world.</p>
                        </div>

                        <div id="white_part1">
                            <div>
                                <img
                                    src="https://eep.io/images/yzco4xsimv0y/1zWDKFXdQBZGeColFCtHgf/aa379dc2696f582b48f0e399c8a5f871/support1_b_w.png?w=160&fm=webp&q=80" alt="" />
                                <h2>Award-winning support</h2>
                                <p>Get the help you need, whenever you need it with our 24/7 support.</p>
                            </div>
                            <div>
                                <img src="https://eep.io/images/yzco4xsimv0y/2OBlZ0Aun44giirtdr6Fx4/e592f63930574780f28fb792318c5899/thumbsup_b_w.png?w=160&fm=webp&q=80"
                                    alt="" />
                                <h2>250+ app integrations</h2>
                                <p>You can connect your tools to Mailchimp and unlock even more features.</p>
                            </div>
                            <div>
                                <img
                                    src="https://eep.io/images/yzco4xsimv0y/5ZD6ImzMGdQbhR59NIQB7a/b1dbe083df8adfceab2c75a1d66066e4/trustedpros_b_w.png?w=160&fm=webp&q=80" alt='' />
                                <h2>A directory of trusted pros</h2>
                                <p>
                                    Take your marketing to the next level when you work with a Mailchimp partner.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div id="white_part2">
                                <h1>12 million businesses rely on Mailchimp:</h1>
                                <div id="four_image">
                                    <img src="https://eep.io/images/yzco4xsimv0y/6EIjMFs2ZyQWsmOOYc4cGe/19d62aa558c8f5d4c4bf222e7e36571b/EastFork.png?w=520&fm=webp&q=80"
                                        alt="" className='height_img' />
                                    <img src="https://eep.io/images/yzco4xsimv0y/5Z9C7t0HDyyaWu60iWE00A/2e3d2eaa056d0d86c6712c88d239762f/chronicle-books-logo.jpg?w=520&fm=webp&q=80"
                                        alt="" />
                                    <img src="https://eep.io/images/yzco4xsimv0y/vHWiUSlrS8sSQc0cCesGY/429d539471239d6ffcdb8be8767140cb/Fader-Logo-800px-144dpi.jpg?w=520&fm=webp&q=80"
                                        alt="" className='height_img' />
                                    <img src="https://eep.io/images/yzco4xsimv0y/2fZXnWbDK8ugIaCW8Qus0i/1b8f1c4aa80dda874418e4bfa29b60e5/Sweat.png?w=520&fm=webp&q=80"
                                        alt="" className='height_img' />
                                </div>
                                <div id="get_started">
                                    <h1>Get Started For Free</h1>
                                    <button>Sign up</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div id='grow_your'>

                        <div >
                            {/*  style="width:400px; margin:auto; text-align:center; margin-bottom: 100px;" */}
                            <h1>Grow with Mailchimp</h1>
                            <p>No matter the size of your business, our tools are here to help you launch, build, and grow.</p>
                        </div>

                        <div className='equal_part'>
                            <img
                                src="https://eep.io/images/yzco4xsimv0y/2V2qyFsIJhzeCTHxRqOrkj/b9291dc9b867d3c65f855ab53cbd1e90/mtsb_market_your_business_floats__2_.png?w=760&fm=webp&q=80" alt='' />

                            <div>
                                <h2>Market your business</h2>
                                <p>Send the right messages on all the right channels. Build emails, social ads, landing
                                    pages, postcards, and more from one place.</p>
                            </div>
                        </div>


                        <div className='equal_part'>
                            {/* class="equal_part" style=" margin-top: 100px;" */}
                            <div>
                                <h2>Get your business online</h2>
                                <p>Build a beautiful website with a custom domain, launch an online store, and allow
                                    customers to book appointments directly from your website.</p>
                            </div>
                            <img
                                src="https://eep.io/images/yzco4xsimv0y/6nQ4AQKdhqdEtbyt0ATvQI/83fa92b48a2a8881a8736e86f4c4e5fd/mtsb_get_your_business_online_floats__2_.png?w=760&fm=webp&q=80" alt='' />
                        </div>


                        {/* style=" margin-top: 100px;" */}
                        <div className='equal_part'>
                            <img
                                src="https://eep.io/images/yzco4xsimv0y/2a6oymKQXlg4E71qZA8yjJ/70ff4711985b17539515ba6faa956275/mtsb_cjb_floats__3_.png?w=760&fm=webp&q=80" alt='' />
                            <div>
                                <h2>Automate your marketing</h2>
                                <p>Add a personal touch without the personal effort through automated messages that reach
                                    your customers at exactly the right moments.</p>
                            </div>
                        </div>

                    </div>

                    <div id="three_smalldiv">
                        <div class="three_smalldiv">
                            <img
                                src="https://eep.io/images/yzco4xsimv0y/01BcV4OFnqHv593jCOAoe5/14cc7d3f6e3baf94d83f944891f6f9a2/78_Audience-Management_AUI.png?w=160&fm=webp&q=80" />

                            <h2>Audience management</h2>
                            <p>Put your people at the heart of your marketing with tools that help you get to know your audience
                                and insights that can help drive better results.</p>
                        </div>
                        <div class="three_smalldiv">
                            <img
                                src="https://eep.io/images/yzco4xsimv0y/1dII7VLoJEoI300uZQxH8O/0c910ac9221428f4dd2a0d14b28cd2d3/UmvWY-_w.png?w=160&fm=webp&q=80" />

                            <h2>Creative tools</h2>
                            <p>Let your brand shine through with easy-to-use design tools, flexible templates, and AI-powered
                                custom designs.</p>
                        </div>
                        <div class="three_smalldiv">
                            <img
                                src="https://eep.io/images/yzco4xsimv0y/4Z8MVGFdIiouoNlKo58pZy/e9d6e095e7967a34e6856afe1abba2bb/9_GYBO_AUI.png?w=160&fm=webp&q=80" />
                            <h2>
                                Insights and analytics
                            </h2>
                            <p>With all your data and insights in one place, you can see what’s working best and get
                                recommendations to help you do more of it.</p>
                        </div>
                    </div>

                    <div id="footer">
                        <div id="footer_inside">
                            <div>
                                <h3>Projects</h3>
                                <p class="small_font">Why Mailchimp</p>
                                <p class="small_font">Product updates</p>
                                <p class="small_font">Email Marketing</p>
                                <p class="small_font">Website</p>
                            </div>
                            <div>
                                <h3>
                                    Resources
                                </h3>
                                <p class="small_font">Guide and Tutorials</p>
                                <p class="small_font">Marketing Tips</p>
                                <p class="small_font">Free marketing tools</p>
                                <p class="small_font">Marketing Glossary</p>
                            </div>
                            <div>
                                <h3>Community</h3>
                                <p class="small_font">Agencies and Freelancers</p>
                                <p class="small_font">Developers</p>
                                <p class="small_font">Events</p>
                            </div>
                            <div>
                                <h3>Company</h3>
                                <p class="small_font">Our Stories</p>
                                <p class="small_font">NewsRooms</p>
                                <p class="small_font">Annual Reports</p>
                                <p class="small_font"></p>
                            </div>
                            <div>
                                <div>
                                    <img src="https://eep.io/images/yzco4xsimv0y/73ZAoe8O3Y7SXQLeCNTq5u/8ddf1f63b4abdf7f67149d3a9d74a0bd/MCP.svg?w=260&fm=webp&q=80"
                                        className='small_image' />
                                         {/* style="width:150px" */}
                                        <p class="small_font">Films, podcasts, and original series that celebrate the entrepreneurial spirit.</p>
                                        <p class="small_font">Check it out</p>
                                </div>
                                <div>
                                    <img src="https://eep.io/images/yzco4xsimv0y/5itQmdXHB6vMuAcvyWp5MR/ef5cd2cecd4c92b7029a22ec67585c65/Courier.svg?w=260&fm=webp&q=80"
                                        className='small_image'/>
                                        {/*  style="width:130px; margin-top: 50px;" */}
                                        <p class="small_font">Expert insights, industry trends, and inspiring stories that help you live and work on
                                            your own terms.</p>
                                        <p class="small_font">Learn more</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}