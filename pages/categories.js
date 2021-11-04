import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { CATEGORIES } from "../utils/dummyData"
const Categories = () => {
    return (
        <div className="categories-page">
            <h1>Categorias</h1>
            <div className="categories-page-results">
                {CATEGORIES.map(category => (
                    <Category key={category.name} {...category} />
                ))}
            </div>
        </div>
    )
}

export default Categories


const Category = ({name, icon, description}) => {
    return (
        <div className="category-card" onClick={() => console.log(name)}>
            <FontAwesomeIcon icon={icon} className="category-card-icon"/>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    )
}