
export default function FeatureIcon({ img, titleHn, desc, icon }) {
    return (
        <div className="feature-item">
            <img src={img} alt={`${icon} Icon`} className="feature-icon" />
            <h3 className="feature-item-title">
                {titleHn}
            </h3>
            <p>
                {desc}
            </p>
        </div>
    )
}