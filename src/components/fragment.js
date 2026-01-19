import React from 'react'

function Fragment() {
    const personData=[{"id": 1, "key": "name", "value": "semon"},
        {"id": 2, "key": "age", "value": 21},
        {"id": 3, "key": "faculty", "value": "computers&information"},
        {"id": 4, "key": "stack", "value": "MEAN"}
    ];

    const cellStyles={
      border: "1px dashed black",
      margin:"0px",
      padding:"3px"
    };

    const personDataList=personData.map(entry=>(
        <tr key={entry.id}>
            <>
                <td style={cellStyles}><h3>{entry.key}</h3></td>
                <td style={cellStyles}><p>{entry.value}</p></td>
            </>
        </tr>));

  return (
    <React.Fragment>
      {personDataList}
    </React.Fragment>
  )
}

export default Fragment
