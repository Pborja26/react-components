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
    faSpinner,
    IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

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
    borderwidth,
    dinamiccaret = false,
    caret = "down",
    flexdirection = "row",
    justifycontent = "center",
    alignitems = "center"
}: ButtonProps) => {
    const [caretInvert, setCaretInvert] = useState<boolean>(false);

    const handleIcon = (icon: IconDefinition) => {
        if (loading) {
            return <FontAwesomeIcon icon={faSpinner} size={iconsize} spin />; 
        }
        if (iconposition === "left" && icon) {
            return <FontAwesomeIcon icon={icon} size={iconsize} />;
        }
        if (iconposition === "right" && icon) {
            return <FontAwesomeIcon icon={icon} size={iconsize} />;
        }
        return null;
    };

    const handdleCaret = (caret: string) => {
        switch(caret) {
            case "up":
                return (
                    dinamiccaret ? (
                        caretInvert ? (
                            <FontAwesomeIcon icon={faCaretDown} size={iconsize} />
                        ) : (
                            <FontAwesomeIcon icon={faCaretUp} size={iconsize} />
                        )
                    ) : (
                        <FontAwesomeIcon icon={faCaretUp} size={iconsize} />
                    )
                )
            
            case "down":
                return (
                    dinamiccaret ? (
                        caretInvert ? (
                            <FontAwesomeIcon icon={faCaretUp} size={iconsize} />
                        ) : (
                            <FontAwesomeIcon icon={faCaretDown} size={iconsize} />
                        )
                    ) : (
                        <FontAwesomeIcon icon={faCaretDown} size={iconsize} />
                    )
                )

            case "right":
                return (
                    dinamiccaret ? (
                        caretInvert ? (
                            <FontAwesomeIcon icon={faCaretLeft} size={iconsize} />
                        ) : (
                            <FontAwesomeIcon icon={faCaretRight} size={iconsize} />
                        )
                    ) : (
                        <FontAwesomeIcon icon={faCaretRight} size={iconsize} />
                    )
                )

            case "left":
                return (
                    dinamiccaret ? (
                        caretInvert ? (
                            <FontAwesomeIcon icon={faCaretRight} size={iconsize} />
                        ) : (
                            <FontAwesomeIcon icon={faCaretLeft} size={iconsize} />
                        )
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
                    {iconposition === "left" && icon && handleIcon(icon)}
                    {label}
                    {iconposition === "right" && icon && handleIcon(icon)}
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
                    {iconposition === "left" && icon && handleIcon(icon)}
                    {label}
                    {iconposition === "right" && icon && handleIcon(icon)}
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
                    {iconposition === "left" && icon && handleIcon(faXmark)}
                    {label}
                    {iconposition === "right" && icon && handleIcon(faXmark)}
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
                    {iconposition === "left" && icon && handleIcon(faTrash)}
                    {label}
                    {iconposition === "right" && icon && handleIcon(faTrash)}
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
                    {iconposition === "left" && icon && handleIcon(faMagnifyingGlass)}
                    {label}
                    {iconposition === "right" && icon && handleIcon(faMagnifyingGlass)}
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
                    {iconposition === "left" && icon && handleIcon(faFilter)}
                    {label}
                    {iconposition === "right" && icon && handleIcon(faFilter)}
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
                    {iconposition === "left" && icon && handleIcon(faCalendar)}
                    {label}
                    {iconposition === "right" && icon && handleIcon(faCalendar)}
                </ButtonComponent>
            )
        case "caret":
            return (
                <ButtonComponent
                    border={border}
                    bordercolor={bordercolor}
                    textcolor={textcolor}
                    onClick={() => {
                        onClick && onClick();
                        setCaretInvert(!caretInvert);
                    }}
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
                    {iconposition === "left" && icon && handleIcon(icon)}
                    {label}
                    {iconposition === "right" && icon && handleIcon(icon)}
                </ButtonComponent>
            )

    }
}

export default Button;
