import axios from 'axios'
import React, {useEffect, useState} from 'react'

import {ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts'

function Chart() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/tran")
        .then((res) => {setData(res.data)})
        .catch(error => console.log(error))

        console.log(data)
    },[data])
    
    function getData(type) {
        var aggData = {};
        var modifiedData = [];
        
        for (let item of data){
            if(item.type === type){
                if(item.category in aggData){
                    aggData[item.category] = aggData[item.category] + item.quantity;
                }
                else{
                    aggData[item.category] = item.quantity;
                }
            }
        }
        
        for(let item in aggData){
            modifiedData.push({name: item, quantity: aggData[item]})
        }

        return (modifiedData)
    }

    return (
        <div>

            <h4>Cake Sales Chart</h4>
            
            <ResponsiveContainer width="75%" aspect={2}>
                <BarChart width={500} height={300} data={getData("Cake")} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Legend/>
                    <Tooltip />
                    <Bar dataKey="quantity" fill="#8884d8"/>
                </BarChart>

            </ResponsiveContainer>

            <h4>Flower Sales Chart</h4>
            
            <ResponsiveContainer width="75%" aspect={2}>
                <BarChart width={500} height={300} data={getData("Flower")} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Legend/>
                    <Tooltip />
                    <Bar dataKey="quantity" fill="#82ca9d"/>
                </BarChart>

            </ResponsiveContainer>
        </div>
    )
}

export default Chart
