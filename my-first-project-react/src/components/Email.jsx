import { useState } from "react";

const Email = () => {
    const [isFill, setFill] = useState(false)

    const styles = {
        backgroundColor: isFill ? 'red' : 'transparent'
    }

    const handleChangeFill = () => {
        setFill(!isFill)
    }

    return (
        <div>
            <div className="star" style={styles} onClick={handleChangeFill} />
            <button onClick={handleChangeFill}>
                { isFill ? 'Clear' : 'Fill'}
                </button>
           
        </div>
    )
}
export default Email