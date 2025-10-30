import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Testimonials } from './data'

function Items({ currentItems }) {
    console.log('🚀 ~ Items ~ currentItems:', currentItems)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:grid-cols-3 gap-6 relative">
            {currentItems &&
                currentItems.map((review, index) => (
                    <div
                        key={index}
                        className={`p-6 border border-gray-200 rounded-2xl shadow-sm bg-white transition-all duration-300 ${
                            index >= 3
                                ? 'opacity-50 blur-[1px] scale-[0.98]'
                                : 'opacity-100 scale-100'
                        } hover:opacity-100 hover:blur-none hover:scale-105`}
                    >
                        <img
                            src={review.image}
                            alt={review.name}
                            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 text-center">
                            {review.name}
                        </h3>
                        <p className="text-sm text-gray-500 text-center mb-2">
                            {review.role}
                        </p>
                        <p className="text-gray-700 text-center italic">
                            “{review.quote}”
                        </p>
                    </div>
                ))}
        </div>
    )
}

const Reviews = ({ itemsPerPage = 4 }) => {
    const [itemOffset, setItemOffset] = useState(0)

    const endOffset = itemOffset + itemsPerPage
    const currentItems = Testimonials.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(Testimonials.length / itemsPerPage)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Testimonials.length

        setItemOffset(newOffset)
    }

    return (
        <div className="max-w-4xl mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Customer Testimonials
            </h2>

            {/* Items */}
            <Items currentItems={currentItems} />

            {/* Pagination */}
            <div className="flex justify-center mt-8">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next ›"
                    previousLabel="‹ Prev"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    containerClassName="flex cursor-pointer space-x-2"
                    pageLinkClassName="px-3 py-1 border bg-white border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                    previousLinkClassName="px-3 py-1 border bg-white border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                    nextLinkClassName="px-3 py-1 border bg-white border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                    activeLinkClassName="bg-yellow-500 text-black border-yellow-500"
                    breakLinkClassName="px-3 py-1 bg-white text-gray-500"
                />
            </div>
        </div>
    )
}

export default Reviews
