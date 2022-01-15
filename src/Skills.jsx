import React, { Component } from "react";
 
class Skills extends Component {
  render() {
    return (
      <div>
        <div className="skills">
        <div className="skills-content">
        <div className="column right">

<div className="bars">
<div className="info">
<span>HTML</span>
<span>90%</span>
</div>
<div className="line html"></div>
</div>

<div className="bars">
<div className="info">
<span>CSS</span>
<span>80%</span>
</div>
<div className="line css"></div>
</div>

<div className="bars">
<div className="info">
<span>JAVASCRIPT</span>
<span>80%</span>
</div>
<div className="line javascript"></div>
</div>

<div className="bars">
<div className="info">
<span>Competitive Programming</span>
<span>60%</span>
</div>
<div className="line CP"></div>
</div>

<div className="bars">
<div className="info">
<span>C/C++</span>
<span>90%</span>
</div>
<div className="line C"></div>
</div>

</div>
      </div>
      </div>
      </div>
    );
  }
}
 
export default Skills;