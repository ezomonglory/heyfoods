import { searchRestaurantAsync } from '@/redux/features/RestaurantSlice'
import { ImportExport, Search } from '@mui/icons-material'
import { Button, InputAdornment, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

const HeaderBottom = ({setSortShow, sortShow, setSearch}) => {
    const dispatch = useDispatch()
	const handleSearch = (event) => {
		if (event.key === "Enter") {
            console.log("heyyy")
			const searchTerm = event.target.value;			
			performSearch(searchTerm);
		}
	};

	const performSearch = (searchTerm) => {
            dispatch(searchRestaurantAsync(searchTerm))
	};

  return (
    
			<div className='flex md:hidden justify-between border-[1px] border-b-gray-200 border-transparent pb-2 bg-white px-[16px] py-[12px] '>
            <div className=' w-[90%] block '>
                <TextField
                    variant='outlined'
                    placeholder='Search restuarant or food'
                    fullWidth
                    onKeyDown={handleSearch}
                    sx={{
                        borderRadius: 8,
                        backgroundColor: "#F0F0F0",
                        padding: "0.5px 1.2px",
                        display: "inline-flex",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderWidth: 0,
                            },
                            "&:hover fieldset": {
                                borderWidth: 0,
                            },
                            "&.Mui-focused fieldset": {
                                borderWidth: 0,
                            },
                        },
                        "& input": {
                            background: "transparent",
                            color: "black",
                            fontSize: "14px",
                        },
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                <Search sx={{ color: "black" }} />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>

            <Button
                variant='text'
                sx={{
                    color: "black",
                }}

                onClick={()=> {
                    setSortShow(!sortShow)
                }}
            >
                <ImportExport />
            </Button>
        </div>
  )
}

export default HeaderBottom