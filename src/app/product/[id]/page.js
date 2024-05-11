import Details from "@/components/details/Details";


const page = ({params}) => {


    return (
        <div>
            <Details id={params.id}/>
        </div>
    );
};

export default page;