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
    caretinvert,
    borderwidth,
    caret = "down",
    flexdirection = "row",
    justifycontent = "center",
    alignitems = "center"
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
                    radius={radius || "8px"}
                    gap={gap || "10px"}
                    padding={padding || "10px"}
                    width={width || "100%"}
                    height={height || "45px"}
                    border={border || "solid"}
                    bordercolor={bordercolor || Themes.primary.main}
                    color={color || Themes.primary.main}
                    textcolor={textcolor || "#fff"}
                    onClick={onClick}
                    borderwidth={borderwidth || "2px"}
                    flexdirection={flexdirection}
                    justifycontent={justifycontent}
                    alignitems={alignitems}
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
                    flexdirection={flexdirection}
                    justifycontent={justifycontent}
                    alignitems={alignitems}
                >

                </ButtonComponent>
            )
        case "close":
            return (
                <ButtonComponent
                    onClick={onClick}
                    radius={radius || "20px"}
                    border="none"
                    width={width || "20px"}
                    height={height || "20px"}
                    padding={padding || "5px"}
                    flexdirection={flexdirection || "row"}
                    justifycontent={justifycontent || "center"}
                    alignitems={alignitems || "center"}
                >
                    {loading ? (
                        <FontAwesomeIcon icon={faSpinner} size={iconsize} spin />
                    ) : (
                        <FontAwesomeIcon icon={faXmark} size={iconsize} />
                    )}
                </ButtonComponent>
            )
        case "delete":
            return (
                <ButtonComponent
                    border={border || "none"}
                    bordercolor={bordercolor || "none"}
                    textcolor={textcolor || "#fff"}
                    onClick={onClick}
                    gap={gap || "10px"}
                    radius={radius || "20px"}
                    padding={padding || "10px"}
                    disabled={disabled}
                    width={width || "25px"}
                    height={height || "25px"}
                    hovercolor={hovercolor}
                    color={color || "red"}
                    flexdirection={flexdirection || "row"}
                    justifycontent={justifycontent || "center"}
                    alignitems={alignitems || "center"}
                >
                    {loading ? (
                        <FontAwesomeIcon icon={faSpinner} size={iconsize} spin />
                    ) : (
                        <FontAwesomeIcon icon={faTrash} size={iconsize} />
                    )}
                </ButtonComponent>
            )
        case "search":
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
                    flexdirection={flexdirection}
                    justifycontent={justifycontent}
                    alignitems={alignitems}
                >
                    {loading ? (
                        <FontAwesomeIcon icon={faSpinner} size={iconsize} spin />
                    ) : (
                        iconposition === "left" && label

                    )}
                </ButtonComponent>
            )
        case "filter":
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
                    flexdirection={flexdirection}
                    justifycontent={justifycontent}
                    alignitems={alignitems}
                >

                </ButtonComponent>
            )
        case "calendar":
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
                    flexdirection={flexdirection}
                    justifycontent={justifycontent}
                    alignitems={alignitems}
                >

                </ButtonComponent>
            )
        case "caret":
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
                    flexdirection={flexdirection}
                    justifycontent={justifycontent}
                    alignitems={alignitems}
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
                    flexdirection={flexdirection}
                    justifycontent={justifycontent}
                    alignitems={alignitems}
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
