import { useState } from "react"
import styled from "@emotion/styled"
import { StyledDropdownListItem } from "./StyledDropdownListItem"

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  position: relative;
`

const StyledButton = styled.button`
  cursor: pointer;
  display: block;
  height: 40px;
  width: 100%;
  font-size: 18px;
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 400;
  border-radius: 18px;
  border-bottom-left-radius: ${(props) => (props.isOpen ? "0" : "18px")};
  border-bottom-right-radius: ${(props) => (props.isOpen ? "0" : "18px")};
  margin-top: ${(props) => props.theme.spacing.xs};
  padding: ${(props) => props.theme.spacing.s};
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.neutral.a};
  &:focus {
    border-color: ${(props) => props.theme.colors.focus};
  }
`

const StyledDropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 1;
  border: 1px solid ${(props) => props.theme.colors.neutral.a};
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top: none;
  margin: 0;
  padding: 0 ${(props) => props.theme.spacing.m};
  list-style: none;
`

const estadosBrasileiros = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
]

export const DropdownList = ({ title }) => {
  const [isOpen, setVisibility] = useState(false)
  const [optionFocus, setOptionFocus] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)

  const handleKeyboard = (event) => {
    setVisibility(true)
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault()
        setOptionFocus((oldFocus) => {
          if (oldFocus == null) {
            return 0
          }
          if (oldFocus === estadosBrasileiros.length - 1) {
            return estadosBrasileiros.length - 1
          }
          return (oldFocus += 1)
        })
        break

      case "Tab":
      case "Escape":
        setOptionFocus(null)
        setVisibility(false)
        break

      case "ArrowUp":
        event.preventDefault()
        setOptionFocus((oldFocus) => {
          if (!oldFocus) {
            return 0
          }
          return (oldFocus -= 1)
        })
        break

      case "Enter":
        event.preventDefault()
        setOptionFocus(null)
        setVisibility(false)
        setSelectedOption(estadosBrasileiros[optionFocus])
        break

      default:
        break
    }
  }
  return (
    <StyledLabel>
      {title}
      <StyledButton
        isOpen={isOpen}
        onClick={() => setVisibility(!isOpen)}
        onKeyDown={handleKeyboard}
      >
        <div>{selectedOption ? selectedOption.text : "Selecione"}</div>
        <div>
          <span>{isOpen ? "▲" : "▼"}</span>
        </div>
      </StyledButton>
      {isOpen && (
        <StyledDropdownList>
          {estadosBrasileiros.map((uf, index) => (
            <StyledDropdownListItem
              key={uf.value}
              activeFocus={index === optionFocus}
              onClick={() => setSelectedOption(uf)}
            >
              {uf.text}
            </StyledDropdownListItem>
          ))}
        </StyledDropdownList>
      )}
    </StyledLabel>
  )
}
