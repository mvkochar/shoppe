import React from 'react'
import './css/SingleBlog.css'
import { useParams } from 'react-router-dom'
import PostsList from '../components/PostsList/PostsList'

const SingleBlog = () => {
    const { id } = useParams<string>()
    let a = id ? id : '0'
    let index = parseInt(a)
    const currentPost = PostsList[index]

    return (
        <>
            <div className="top-divider container" style={{ marginTop: "17px" }}></div>
            <h1 className="single-blog-title">{currentPost.title}</h1>
            <h5 className="single-blog-subtitle">by <span>{currentPost.author}</span> - {currentPost.date}</h5>
            <div className="container"><img src={currentPost.image} alt="post-main" width={1248} height={646} /></div>
            <div className="single-blog-middle">
                <p className="single-blog-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
                    sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
                    consequat sed eu felis. Nunc sed porta augue.
                </p>
                <p className="single-blog-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
                    sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
                    consequat sed eu felis. Nunc sed porta augue.
                </p>
                <div><img src={currentPost.image} alt="post-min" width={670} height={300} /></div>
                <div className="single-blog-trends">
                    <h2 className="trends-title">Top trends</h2>
                    <p className="single-blog-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue
                        a <br /> volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.
                    </p>
                    <ul className="trends-list">
                        <li>consectetur adipiscing elit. Aliquam placerat</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>sapien tortor faucibus augue</li>
                        <li>a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis</li>
                    </ul>
                </div>
                <div className="d-f jc-sb" style={{paddingBottom: "44px", borderBottom: "1px solid #D8D8D8"}}>
                    <div className="single-blog-tags d-f align-center">
                        <h5 className="tags-title">Tags</h5>
                        <div className="tags-line"></div>
                        <h5 className="tags-desc">Fashion, Style, Season</h5>
                    </div>
                    <div className="single-blog-share d-f align-center">
                        <h5 className='share-title'>Share</h5>
                        <div className="share-line"></div>
                        <div className="share-social d-f">
                            <div>
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.5 3H6.5C5.94772 3 5.5 3.44772 5.5 4V7H9.5C9.61374 6.99748 9.7216 7.05039 9.78923 7.14188C9.85685 7.23336 9.87578 7.35201 9.84 7.46L9.1 9.66C9.03181 9.86192 8.84312 9.99842 8.63 10H5.5V17.5C5.5 17.7761 5.27614 18 5 18H2.5C2.22386 18 2 17.7761 2 17.5V10H0.5C0.223858 10 0 9.77614 0 9.5V7.5C0 7.22386 0.223858 7 0.5 7H2V4C2 1.79086 3.79086 0 6 0H9.5C9.77614 0 10 0.223858 10 0.5V2.5C10 2.77614 9.77614 3 9.5 3Z" fill="#707070" />
                                </svg>
                            </div>
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0H5C2.23858 0 0 2.23858 0 5V13C0 15.7614 2.23858 18 5 18H13C15.7614 18 18 15.7614 18 13V5C18 2.23858 15.7614 0 13 0ZM16.25 13C16.2445 14.7926 14.7926 16.2445 13 16.25H5C3.20735 16.2445 1.75549 14.7926 1.75 13V5C1.75549 3.20735 3.20735 1.75549 5 1.75H13C14.7926 1.75549 16.2445 3.20735 16.25 5V13ZM13.75 5.25C14.3023 5.25 14.75 4.80228 14.75 4.25C14.75 3.69772 14.3023 3.25 13.75 3.25C13.1977 3.25 12.75 3.69772 12.75 4.25C12.75 4.80228 13.1977 5.25 13.75 5.25ZM9 4.50001C6.51472 4.50001 4.5 6.51473 4.5 9.00001C4.5 11.4853 6.51472 13.5 9 13.5C11.4853 13.5 13.5 11.4853 13.5 9.00001C13.5027 7.80572 13.0294 6.65958 12.1849 5.81509C11.3404 4.9706 10.1943 4.49735 9 4.50001ZM6.25 9C6.25 10.5188 7.48122 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25C7.48122 6.25 6.25 7.48122 6.25 9Z" fill="#707070" />
                                </svg>
                            </div>
                            <div>
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.9708 2.46378C19.4547 3.15213 18.8309 3.75258 18.1235 4.24195C18.1235 4.42177 18.1235 4.60158 18.1235 4.79139C18.1292 8.0568 16.8249 11.1879 14.5029 13.4828C12.181 15.7777 9.03567 17.0443 5.77211 16.9988C3.88538 17.0051 2.02281 16.5743 0.330301 15.7401C0.239042 15.7003 0.18018 15.61 0.180527 15.5103V15.4005C0.180527 15.257 0.296758 15.1407 0.440136 15.1407C2.29475 15.0796 4.0832 14.4366 5.55244 13.3026C3.87376 13.2688 2.36338 12.2744 1.66829 10.7453C1.63318 10.6617 1.64411 10.5659 1.69713 10.4925C1.75016 10.419 1.83761 10.3785 1.9279 10.3856C2.43809 10.4369 2.95337 10.3894 3.44561 10.2458C1.59249 9.86109 0.200074 8.32265 0.000797149 6.43969C-0.00628542 6.34936 0.0341943 6.26187 0.107613 6.20882C0.181031 6.15577 0.276775 6.14483 0.360256 6.17996C0.857554 6.39939 1.39439 6.51496 1.93788 6.51961C0.314106 5.45384 -0.387258 3.42672 0.230452 1.58469C0.294214 1.4057 0.447402 1.27347 0.633723 1.2366C0.820043 1.19972 1.01201 1.26365 1.13908 1.40487C3.33027 3.73695 6.34099 5.12662 9.53645 5.28088C9.4546 4.95427 9.41434 4.61862 9.41663 4.28191C9.44652 2.51636 10.5389 0.943567 12.1825 0.299861C13.826 -0.343846 15.6953 0.0689272 16.9153 1.34494C17.747 1.18651 18.551 0.907164 19.3018 0.515789C19.3568 0.481454 19.4265 0.481454 19.4815 0.515789C19.5158 0.57081 19.5158 0.640583 19.4815 0.695604C19.1178 1.52835 18.5035 2.2268 17.7241 2.69355C18.4066 2.6144 19.0771 2.45341 19.7211 2.21404C19.7754 2.17713 19.8466 2.17713 19.9009 2.21404C19.9463 2.23482 19.9802 2.27457 19.9937 2.32269C20.0072 2.37081 19.9988 2.42242 19.9708 2.46378Z" fill="#707070" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-blog-reply">
                    <h3 className="reply-title">Leave a reply</h3>
                    <h5 className='reply-subtitle'>Your email address will not be published. Required fields are marked *</h5>
                    <form action="" className="reply-fm">
                        <input type="text" name='replyName' placeholder='Enter your name*' />
                        <input type="email" name="replyEmail" placeholder='Enter your Email*' />
                        <input type="text" name='replyWebsite' placeholder='Enter your Website' />
                        <div className="check-bl d-f">
                            <input type="checkbox" name="replySave" id="replySave" />
                            <label htmlFor="replySave">
                                Save my name, email, and website in this browser for the next time I comment
                            </label>
                        </div>
                        <textarea name="replyComment" placeholder='Your Comment*'></textarea>
                        <button type='button'>Post comment</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SingleBlog