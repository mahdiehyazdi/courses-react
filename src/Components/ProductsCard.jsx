export default function ProductsCard({ course }) {
    const startDate = new Date(course.start).toLocaleDateString("en-Us", {
        month: "short",
        year: "numeric",
        day: "numeric",
    });
    return (
        <div className="product__list__box">
            <img src={course.imageUrl} />
            <Score rate={course.rate} />
            <div className="product__list__text">
                <h2>{course.title}</h2>
                <span>{course.description}</span>
                <Tags tags={course.tags} tagStatus={course.status} />
                <p className="product__date">{startDate}</p>
            </div>
        </div>
    );
}

function Score({ rate }) {
    return (
        <div className="product__score">
            <img src="/Svg/star.svg" />
            <strong>{rate}</strong>
        </div>
    );
}

function Tags({ tags, tagStatus }) {
    return (
        <div id="product__tags">
            <div>
                {tags.map((t, index) => (
                    <p key={index} className="product__tags__subject">
                        {t}
                    </p>
                ))}
            </div>
            <p className={`${tagStatus === "Completed" ? "product__tags__completed " : tagStatus === "Upcoming" ? "product__tags__uncompleted" : "product__tags__active"}`}>{tagStatus}</p>
        </div>
    );
}
