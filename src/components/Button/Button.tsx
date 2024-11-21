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
    hovercolor
}: ButtonProps) => {
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
                >
                    {loading ? (
                        <FontAwesomeIcon icon={faSpinner} size={iconsize} spin />
                    ) : (
                        <>
                            {icon && iconposition === "left" && 
                                <FontAwesomeIcon icon={icon} size={iconsize} />
                            }
                            {label}
                            {icon && iconposition === "right" &&
                                <FontAwesomeIcon icon={icon} size={iconsize} />
                            }
                        </>
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
                <ButtonComponent>

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
                        <>
                            {icon && iconposition === "left" &&
                                <FontAwesomeIcon icon={icon} size={iconsize} />
                            }
                            {label}
                            {icon && iconposition === "right" && 
                                <FontAwesomeIcon icon={icon} size={iconsize} />
                            }
                        </>
                    )}
                </ButtonComponent>
            )

    }
}

export default Button;
