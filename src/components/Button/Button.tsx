import { ButtonComponent } from "./ButtonStyle";
import { ButtonProps } from "./ButtonTypes";
import { Themes } from "../../utils/themes/Themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faXmark,
    faTrash,
    faCalendar,
    faMagnifyingGlass,
    faFilter,
    faCaretDown,
    faCaretUp,
    faCaretLeft,
    faCaretRight,
    faSpinner
} from "@fortawesome/free-solid-svg-icons";

const Button = ({
    type,
    icon,
    iconposition,
    border,
    bordercolor,
    onClick,
    label,
    color,
    textcolor,
    height,
    width,
    padding,
    gap,
    radius,
    disabled,
    loading,
    iconsize,
    hovercolor,
    caret = "down",
    caretinvert,
    borderwidth
}: ButtonProps) => {
    const handdleCaret = (caret: string) => {
        switch(caret) {
            case "up":
                return (
                    caretinvert ? (
                        <FontAwesomeIcon icon={faCaretDown} size={iconsize} />
                    ) : (
                        <FontAwesomeIcon icon={faCaretUp} size={iconsize} />
                    )
                )
            
            case "down":
                return (
                    caretinvert ? (
                        <FontAwesomeIcon icon={faCaretUp} size={iconsize} />
                    ) : (
                        <FontAwesomeIcon icon={faCaretDown} size={iconsize} />
                    )
                )

            case "right":
                return (
                    caretinvert ? (
                        <FontAwesomeIcon icon={faCaretLeft} size={iconsize} />
                    ) : (
                        <FontAwesomeIcon icon={faCaretRight} size={iconsize} />
                    )
                )

            case "left":
                return (
                    caretinvert ? (
                        <FontAwesomeIcon icon={faCaretRight} size={iconsize} />
                    ) : (
                        <FontAwesomeIcon icon={faCaretLeft} size={iconsize} />
                    )
                )
        }
    }

    switch (type) {
        case "primary":
            return (
                <ButtonComponent
                    disabled={disabled}
                    radius={radius || 8}
                    gap={gap || 10}
                    padding={padding || 10}
                    width={width || 100}
                    height={height}
                    border={border || "none"}
                    bordercolor={bordercolor}
                    color={color || Themes.primary.main}
                    textcolor={textcolor || "#fff"}
                    onClick={onClick}
                    borderwidth={borderwidth}
                >
                    {loading ? (
                        <FontAwesomeIcon icon={faSpinner} size={iconsize} spin />
                    ) : (
                        icon && iconposition === "left" && 
                            <FontAwesomeIcon icon={icon} size={iconsize} />
                    )}
                    {label}
                    {loading ? (
                        <FontAwesomeIcon icon={faSpinner} size={iconsize} spin />
                    ) : (
                        icon && iconposition === "right" &&
                            <FontAwesomeIcon icon={icon} size={iconsize} />  
                    )} 
                </ButtonComponent>
            )
        case "secondary":
            return (
                <ButtonComponent>

                </ButtonComponent>
            )
        case "close":
            return (
                <ButtonComponent
                    onClick={onClick}
                    radius={radius || 20}
                    
                >

                </ButtonComponent>
            )
        case "delete":
            return (
                <ButtonComponent>

                </ButtonComponent>
            )
        case "search":
            return (
                <ButtonComponent>

                </ButtonComponent>
            )
        case "filter":
            return (
                <ButtonComponent>

                </ButtonComponent>
            )
        case "calendar":
            return (
                <ButtonComponent>

                </ButtonComponent>
            )
        case "caret":
            return (
                <ButtonComponent
                
                >
                    {handdleCaret(caret)}
                </ButtonComponent>
            )
        default:
            return (
                <ButtonComponent
                    border={border}
                    bordercolor={bordercolor}
                    textcolor={textcolor}
                    onClick={onClick}
                    gap={gap}
                    radius={radius}
                    padding={padding}
                    disabled={disabled}
                    width={width}
                    height={height}
                    hovercolor={hovercolor}
                    color={color}
                >
                    {loading ? (
                        <FontAwesomeIcon icon={faSpinner} size={iconsize} spin />
                    ) : (
                        icon && iconposition === "left" && 
                            <FontAwesomeIcon icon={icon} size={iconsize} />
                    )}
                    {label}
                    {loading ? (
                        <FontAwesomeIcon icon={faSpinner} size={iconsize} spin />
                    ) : (
                        icon && iconposition === "right" &&
                            <FontAwesomeIcon icon={icon} size={iconsize} />  
                    )} 
                </ButtonComponent>
            )

    }
}

export default Button;
