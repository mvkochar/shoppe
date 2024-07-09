import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './ShoppingBag.css'
import ProductsList from '../ProductsList/ProductsList';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    width: 375,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ShoppingBag = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button className='header-cart' onClick={handleOpen}>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.76598 13.5766H6.76694C6.76775 13.5766 6.76855 13.5764 6.76935 13.5764H17.9238C18.1984 13.5764 18.4399 13.3942 18.5154 13.1302L20.9763 4.51693C21.0293 4.33124 20.9922 4.13161 20.876 3.97748C20.7597 3.82335 20.5778 3.73267 20.3848 3.73267H5.3471L4.9073 1.7535C4.84466 1.472 4.59504 1.27173 4.30665 1.27173H0.615242C0.275421 1.27173 7.62939e-06 1.54714 7.62939e-06 1.88696C7.62939e-06 2.22678 0.275421 2.5022 0.615242 2.5022H3.81318C3.89104 2.85291 5.91779 11.9734 6.03443 12.4982C5.38058 12.7824 4.92188 13.4343 4.92188 14.1916C4.92188 15.2093 5.74989 16.0374 6.76759 16.0374H17.9238C18.2637 16.0374 18.5391 15.7619 18.5391 15.4221C18.5391 15.0823 18.2637 14.8069 17.9238 14.8069H6.76759C6.42841 14.8069 6.15235 14.5308 6.15235 14.1916C6.15235 13.853 6.42744 13.5774 6.76598 13.5766ZM19.5691 4.96313L17.4597 12.3459H7.26105L5.62043 4.96313H19.5691Z" fill="black" />
                    <path d="M6.15234 17.8828C6.15234 18.9005 6.98035 19.7285 7.99805 19.7285C9.01575 19.7285 9.84375 18.9005 9.84375 17.8828C9.84375 16.8651 9.01575 16.0371 7.99805 16.0371C6.98035 16.0371 6.15234 16.8651 6.15234 17.8828ZM7.99805 17.2676C8.33723 17.2676 8.61328 17.5436 8.61328 17.8828C8.61328 18.222 8.33723 18.498 7.99805 18.498C7.65887 18.498 7.38281 18.222 7.38281 17.8828C7.38281 17.5436 7.65887 17.2676 7.99805 17.2676Z" fill="black" />
                    <path d="M14.8476 17.8828C14.8476 18.9005 15.6756 19.7285 16.6933 19.7285C17.711 19.7285 18.539 18.9005 18.539 17.8828C18.539 16.8651 17.711 16.0371 16.6933 16.0371C15.6756 16.0371 14.8476 16.8651 14.8476 17.8828ZM16.6933 17.2676C17.0325 17.2676 17.3086 17.5436 17.3086 17.8828C17.3086 18.222 17.0325 18.498 16.6933 18.498C16.3541 18.498 16.0781 18.222 16.0781 17.8828C16.0781 17.5436 16.3541 17.2676 16.6933 17.2676Z" fill="black" />
                </svg>
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"  
            >
                <Box sx={style} className ="bag">
                    <h5 className='bag-title'>Shopping bag</h5>
                    <div className="bag-subtitle">5 items</div>
                    <div className="bag-box d-f">
                        <div className="bag-item d-f">
                            <div><img src={ProductsList[0].image} alt="product" width={136} height={136} /></div>
                            <div className='bag-item-info'>
                                <div className="bag-item-title">{ProductsList[0].title}</div>
                                <div className="bag-item-color">Black / Medium</div>
                                <div className="bag-item-price">{ProductsList[0].price}</div>
                                <div className="bag-item-quantity d-f align-center">
                                    <div className="quantity-title">QTY:</div>
                                    <button className='quantity-btn'>-</button>
                                    <div className="quantity-count">1</div>
                                    <button className='quantity-btn'>+</button>
                                </div>
                            </div>
                            <button className='bag-delete-btn'><img src="/images/delete.svg" alt="delete" /></button>
                        </div>
                        <div className="bag-item d-f">
                            <div><img src={ProductsList[1].image} alt="product" width={136} height={136} /></div>
                            <div className='bag-item-info'>
                                <div className="bag-item-title">{ProductsList[1].title}</div>
                                <div className="bag-item-color">Black / Medium</div>
                                <div className="bag-item-price">{ProductsList[1].price}</div>
                                <div className="bag-item-quantity d-f align-center">
                                    <div className="quantity-title">QTY:</div>
                                    <button className='quantity-btn'>-</button>
                                    <div className="quantity-count">3</div>
                                    <button className='quantity-btn'>+</button>
                                </div>
                            </div>
                            <button className='bag-delete-btn'><img src="/images/delete.svg" alt="delete" /></button>
                        </div>
                        <div className="bag-item d-f">
                            <div><img src={ProductsList[2].image} alt="product" width={136} height={136} /></div>
                            <div className='bag-item-info'>
                                <div className="bag-item-title">{ProductsList[2].title}</div>
                                <div className="bag-item-color">Black / Medium</div>
                                <div className="bag-item-price">{ProductsList[2].price}</div>
                                <div className="bag-item-quantity d-f align-center">
                                    <div className="quantity-title">QTY:</div>
                                    <button className='quantity-btn'>-</button>
                                    <div className="quantity-count">1</div>
                                    <button className='quantity-btn'>+</button>
                                </div>
                            </div>
                            <button className='bag-delete-btn'><img src="/images/delete.svg" alt="delete" /></button>
                        </div>
                        <div className="bag-item d-f">
                            <div><img src={ProductsList[3].image} alt="product" width={136} height={136} /></div>
                            <div className='bag-item-info'>
                                <div className="bag-item-title">{ProductsList[3].title}</div>
                                <div className="bag-item-color">Black / Medium</div>
                                <div className="bag-item-price">{ProductsList[3].price}</div>
                                <div className="bag-item-quantity d-f align-center">
                                    <div className="quantity-title">QTY:</div>
                                    <button className='quantity-btn'>-</button>
                                    <div className="quantity-count">1</div>
                                    <button className='quantity-btn'>+</button>
                                </div>
                            </div>
                            <button className='bag-delete-btn'><img src="/images/delete.svg" alt="delete" /></button>
                        </div>
                        <div className="bag-item d-f">
                            <div><img src={ProductsList[5].image} alt="product" width={136} height={136} /></div>
                            <div className='bag-item-info'>
                                <div className="bag-item-title">{ProductsList[5].title}</div>
                                <div className="bag-item-color">Black / Medium</div>
                                <div className="bag-item-price">{ProductsList[5].price}</div>
                                <div className="bag-item-quantity d-f align-center">
                                    <div className="quantity-title">QTY:</div>
                                    <button className='quantity-btn'>-</button>
                                    <div className="quantity-count">1</div>
                                    <button className='quantity-btn'>+</button>
                                </div>
                            </div>
                            <button className='bag-delete-btn'><img src="/images/delete.svg" alt="delete" /></button>
                        </div>
                    </div>
                    <div className="bag-subtotal d-f jc-sb">
                          <div>Subtotal (5 items)</div>
                          <div>$ 100,00</div>  
                    </div>
                    <Link to="/shopping-cart" className="bag-view-cart" onClick={handleClose}>View cart</Link>
                </Box>
            </Modal>
        </div>
    )
}

export default ShoppingBag