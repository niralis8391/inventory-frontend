import React, { useState } from 'react';
import qr from '../assets/qr.webp'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const PaymentMethod = ({ onPaymentMethod }) => {
    const [selectedMethod, setSelectedMethod] = useState('');
    const [upiId, setUpiId] = useState('');
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (selectedMethod === 'upi' && !upiId) {
    //         alert('Please enter your UPI ID');
    //         return;
    //     }
    //     navigate('/user/my-order')
    //     console.log('Payment Method:', selectedMethod);
    //     console.log('UPI ID:', upiId);
    //     // Proceed with payment logic
    // };
    useEffect(() => {
        onPaymentMethod(selectedMethod)
    }, [selectedMethod])

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md max-sm:mt-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Select Payment Method</h2>

            <div className="space-y-4">
                <div className="space-y-2">
                    {/* UPI Option */}
                    <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-amber-500 transition">
                        <input
                            type="radio"
                            name="payment"
                            value="upi"
                            checked={selectedMethod === 'upi'}
                            onChange={() => setSelectedMethod('upi')}
                            className="form-radio h-4 w-4 text-amber-600"
                        />
                        <span className="ml-3 text-gray-700">UPI</span>
                    </label>

                    {selectedMethod === 'upi' && (
                        <div className="mt-4 space-y-4 pl-6">
                            <div className="flex justify-center">
                                <img
                                    src={qr}
                                    alt="QR Code"
                                    className="w-40 h-40 rounded"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-700 mb-1">Enter UPI ID</label>
                                <input
                                    type="text"
                                    placeholder="example@upi"
                                    value={upiId}
                                    onChange={(e) => setUpiId(e.target.value)}
                                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    required
                                />
                            </div>
                        </div>
                    )}

                    {/* COD Option */}
                    <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-amber-500 transition">
                        <input
                            type="radio"
                            name="payment"
                            value="cash"
                            checked={selectedMethod === 'cash'}
                            onChange={() => setSelectedMethod('cash')}
                            className="form-radio h-4 w-4 text-amber-600"
                        />
                        <span className="ml-3 text-gray-700">Cash on Delivery</span>
                    </label>
                </div>

                {/* <button
                    type="submit"
                    className="w-full mt-6 cursor-pointer bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition duration-200 disabled:opacity-50"
                    disabled={!selectedMethod}
                >
                    Continue to Payment
                </button> */}
            </div>
        </div>
    );
};

export default PaymentMethod;
