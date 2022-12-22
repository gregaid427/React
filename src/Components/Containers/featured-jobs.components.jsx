import FeatureItem from "./featured-item.component";

function FeaturedJobs(props) {
  return (
    <>
      {/* get featured jobs from API endpoint. */}
      <div className="row py-5">
        <h2 className="text-center">Featured Jobs</h2>
        {props.features.map((feature) => (
          <FeatureItem
            name={feature.name}
            location={feature.location}
            description={feature.description}
          />
        ))}
      </div>
    </>
  );
}

export default FeaturedJobs;
