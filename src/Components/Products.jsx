import React from "react";
import ProductsCard from "./ProductsCard";
import Filter from "./Filter";
const courses = [
    {
        id: 1,
        title: "English Lecture",
        description: "language lessons with the most popular teachers",
        imageUrl: "/Svg/image1.svg",
        rate: "4.5",
        tags: ["langauges"],
        start: "2021-08-01T20:46:30.615Z",
        status: "Completed",
    },
    {
        id: 2,
        title: "Design Strategy",
        description: "lesson on planning design concept and proper planning of work",
        imageUrl: "/Svg/image2.svg",
        rate: "4",
        tags: ["UI/UX design", "web design"],
        start: "2023-07-01T20:46:30.615Z",
        status: "Upcoming",
    },
    {
        id: 3,
        title: "Business Lecture",
        description: "lectures on how to build your buisness safely without fare of new projects",
        imageUrl: "/Svg/image3.svg",
        rate: "3.9",
        tags: ["Marketing", "Finance"],
        start: "2023-07-01T20:46:30.615Z",
        status: "Active",
    },
];
export default function Products() {
    return (
        <div className="product">
            <div className="product__filter">
                <Filter />
            </div>
            <div className="product__main">
                <h1 className="product__title">COURSES (3)</h1>
                <div className="product__list">
                    {courses.map((course) => (
                        <ProductsCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
