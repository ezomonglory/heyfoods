import { Skeleton } from "@mui/material";
import React from "react";

const AllRestaurantLoader = () => {
	const data = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
	return (
		<div className=' flex flex-wrap space-x-4  '>
			{data.map((d, i) => (
				<div key={i} className='flex flex-col items-ceter space-y-2 w-full '>
					<div>
						<Skeleton
							animation='wave'
							variant='rounded'
							width={300}
							height={200}
						/>
					</div>
					<div>
						<Skeleton
							animation='wave'
							variant='rectangular'
							width={200}
							height={10}
						/>
					</div>
					<div>
						<Skeleton
							animation='wave'
							variant='rectangular'
							width={300}
							height={10}
						/>
					</div>
					<div>
						<Skeleton
							animation='wave'
							variant='rectangular'
							width={200}
							height={10}
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default AllRestaurantLoader;
