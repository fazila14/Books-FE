import React, { useState } from 'react'
import "./filterForm.css"

export default function Filterform(props) {
    const [filterObj, setFilterObj]=useState({});
    const [sortObj, setSortObj]=useState({});
    const handleAge=(publicationYear, field)=>{
        let filterParams;
        if(field==="minpubyear"){
            filterParams = {...filterObj, publicationYear:[publicationYear, filterObj.publicationYear?.length>0?filterObj.publicationYear[1]: 2023]};
        }
        else{
            if(publicationYear===0)publicationYear=2023;
            filterParams = {...filterObj, publicationYear:[filterObj.publicationYear.length>0?filterObj.publicationYear[0]: 0, publicationYear]};
        }
        setFilterObj(filterParams);
    }
    const handleOtherFilterData=(field, value)=>{
        const temp = {...filterObj};
        if(value==="")
            delete temp[field];
        else
            temp[field]=value
        setFilterObj({...temp});
    }
    const handleSortData =(field, value)=>{
        const temp = {...sortObj};
        if(value==="")
            delete temp[field];
        else
            temp[field]=value
        setSortObj({...temp});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(filterObj?.publicationYear?.length>0){
            if(filterObj.publicationYear[0]>filterObj.publicationYear[1]){
                window.alert("min publicationYear cannot be greater than max publicationYear")
                return
            }
        }
        props.handleFilterSubmit({filterParams: filterObj, sortParams: sortObj })
    }
    const handleReset=()=>{
        setFilterObj({})
        setSortObj({})
        props.handleFilterSubmit({})
    }
    return (
        <form className='filterSort-container' onSubmit={(e)=>handleSubmit(e)} onReset={handleReset}>
            <section>
                <span>Filters:</span>
                <input type='number'placeholder='Enter Min Pubyear' onChange={(e)=>handleAge(Number(e.target.value), "minpubyear")}/>
                <input type='number'placeholder='Enter Max Pubyear' onChange={(e)=>handleAge(Number(e.target.value), "maxpubyear")}/>
                
                <input type='text'placeholder='Enter Author' onChange={(e)=>{handleOtherFilterData("author", e.target.value)}}/>
                <input type='text' placeholder='Enter Genre'  onChange={(e)=>{handleOtherFilterData("genre", e.target.value)}}/>
            </section>
            <section>
                <span>Sort:</span>
                <select onChange={(e)=>{handleSortData("publicationYear", e.target.value)}}>
                    <option value="" hidden>publicationYear</option>
                    <option value={1}>Ascending</option>
                    <option value={-1}>Descending</option>
                    <option value="">None</option>
                </select>
            </section>
            <section>
                <button type='submit'>Apply</button>
                <button type='reset'>Reset</button>
            </section>
        </form>
    )
}

