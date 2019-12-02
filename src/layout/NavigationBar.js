import React , {Component} from "react"

class NavigationBar extends Component {
    
    render() {
        return (
            <div class="navigation-bar">
                <div class='nav-logo'>
                    <a class="logo-img" ></a>
                    <p class="title">我的后台管理系统</p>
                </div>
                <div class="nav-content">
                    <div class="nav-right">
                        亲爱的管理员，您好！
                    </div>
                </div>
            </div>
        );
    }

} 

export default NavigationBar;