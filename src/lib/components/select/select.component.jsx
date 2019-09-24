import React from 'react';
import { SemanticBase } from '../../external/semantic-base.component';
import './select.component.scss';
export class Select extends SemanticBase {

    selectionRef = React.createRef();
    selectionContainerRef = React.createRef();
    menuRef = React.createRef();
    

    openDropDown = (e) => {
        e.stopPropagation();
        this.closeAllSelect(e.target);
        this.selectionRef.current.classList.add('active', 'visible');
        this.menuRef.current.classList.add('transition', 'visible');
    }

    closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
          if (elmnt == y[i]) {
            arrNo.push(i)
          } 
        }

        for (i = 0; i < x.length; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.remove('transition', 'visible');
            console.log(x[i]);
          }
        }
      }

    componentDidMount() {
        document.addEventListener("click", (e) => this.closeAllSelect(e.target));
    }

    render() {
        return(
        <div className="ui selection dropdown select-selected" ref={this.selectionRef} onClick={this.openDropDown}>
            <input type="hidden" name="gender" />
            <i className="dropdown icon"></i>
            <div className="default text">Gender</div>
            <div className="menu select-items" ref={this.menuRef}>
                <div className="item">Male</div>
                <div className="item">Female</div>
            </div>
        </div>
        );
    }

}

export default Select;