import React from "react";

const Products = ({
	name,
	mainImage,
	launchDate,
	price,
	launchesOn,
	gender,
	link,
}) => (
	<div className="product">
		<div className="launch-date">{launchDate}</div>
		<img
			style={{ width: "298px", height: "250px" }}
			src={
				mainImage === undefined
					? "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"
					: mainImage.original
			}
			alt={name}
		/>
		<div className="product-info">
			<div className="name">{name}</div>
			<div className="p.amount">£{price.amount}</div>
			<div className="gender">Genders: {gender}</div>
			<div className="launches.on">Available on {launchesOn}</div>
			<a
				href={link}
				className="onSiteLink ga-ip"
				data-ip-position="Launch Page"
				data-ip-name="Available Website Clicked"
			>
				<div className="section-cta">
					<span className="lCTA">
						{launchesOn === "website" ? "Shop Now" : "View Raffle"}
					</span>
				</div>
			</a>
		</div>
	</div>
);

export default Products;
