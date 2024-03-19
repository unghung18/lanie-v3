"use client";

import SegmentedControl from '@/components/SegmentedControl/SegmentedControl';
import { useRef, useState, useEffect } from "react";


const page = () => {

    const [selectedValue, setSelectedValue] = useState("ao");

    useEffect(() => {
        console.log(selectedValue);
    }, [selectedValue]);
    return (
        <div>
            <SegmentedControl
                name="group-2"
                callback={(val: any) => setSelectedValue(val)}
                controlRef={useRef()}
                defaultIndex={0}
                segments={[
                    {
                        label: "Áo",
                        value: "ao",
                        ref: useRef()
                    },
                    {
                        label: "Quần",
                        value: "quan",
                        ref: useRef()
                    },
                    {
                        label: "Chân váy",
                        value: "chan vay",
                        ref: useRef()
                    }
                    ,
                    {
                        label: "Đầm",
                        value: "dam",
                        ref: useRef()
                    }
                ]}
            />
        </div>
    )
}

export default page;