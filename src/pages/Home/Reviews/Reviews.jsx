import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Testimonials } from './data'

const Reviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const total = Testimonials.length

    const handlePageClick = (event) => {
        setCurrentIndex(event.selected)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % total)
    }

    // Get 3 visible testimonials (left, center, right)
    const visible = [
        Testimonials[(currentIndex - 1 + total) % total],
        Testimonials[currentIndex],
        Testimonials[(currentIndex + 1) % total],
    ]

    return (
        <div className="max-w-6xl mx-auto py-16 overflow-hidden">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Customer Testimonials
            </h2>

            {/* Carousel */}
            <div className="relative flex items-center justify-center">
                <div className="flex gap-6 transition-transform duration-700 ease-in-out">
                    {visible.map((review, index) => {
                        const isCenter = index === 1
                        return (
                            <div
                                key={index}
                                className={`w-[320px] sm:w-[360px] md:w-[400px] bg-white rounded-2xl p-8 shadow-md text-center transition-all duration-700 ${
                                    isCenter
                                        ? 'scale-100 opacity-100 blur-0 z-10'
                                        : 'scale-90 opacity-40 blur-[1.5px] z-0'
                                }`}
                            >
                                <p className="text-gray-600 italic mb-6 leading-relaxed">
                                    “{review.quote}”
                                </p>
                                <div className="flex items-center justify-center gap-3 mt-4">
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div className="text-left">
                                        <h3 className="font-semibold text-gray-800 text-sm">
                                            {review.name}
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            {review.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Pagination and Arrows Below */}
            <div className="flex justify-center items-center mt-10 space-x-4">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Dots */}
                <ReactPaginate
                    breakLabel={null}
                    nextLabel={null}
                    previousLabel={null}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={total}
                    renderOnZeroPageCount={null}
                    forcePage={currentIndex}
                    containerClassName="flex items-center space-x-3"
                    pageLinkClassName="w-3 h-3 bg-gray-300 rounded-full block transition-all text-transparent select-none duration-300"
                    activeLinkClassName="bg-lime-400 scale-110 text-transparent select-none"
                />

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-lime-300 hover:bg-lime-400 text-gray-800 transition"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    )
}

export default Reviews
