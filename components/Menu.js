import Colors from 'components/utils/colors'
import I18n from 'lib/I18n'
import { Image } from 'components'
import { Label } from 'components/Label'
import Link from 'next/link'
import styled from 'styled-components'

const StyledMenuButton = styled.button`
  border-radius: 0px;
  background: none;
  color: white;
  transition: 0.3s;
  &:hover {
    background: ${props => Colors.get('blue')};
  }
`

const MenuButton = props => (
  <StyledMenuButton  {...props} className={"cursor-pointer w-100 btn text-left pl-4 d-flex align-items-center justify-content-between " + props.className}>
    {!!props.isLink ? <Link href={props.url}><div className="w-100">{props.children}</div></Link> : props.children}
  </StyledMenuButton>
)

const MenuItemButton = props => (
  <MenuButton {...props}>
    <div className="d-flex align-items-center cursor-pointer">
      {!!props.icon && <Image scale={0.7} src={props.icon} className="mr-2" />}
      <Label bold color="white" className="cursor-pointer">{props.text}</Label>
    </div>
    {!!props.hasChevron && <Image scale={0.8} src="/static/assets/chevron-down.svg" />}
  </MenuButton>
)

const Menu = props => (
  <div id="collapibleContent">
    {
      props.menues.map((menu, key) => (
        <div key={key}>
          <MenuItemButton
            data-toggle={`collapse`}
            data-target={`#collapse-target-${key}`}
            aria-expanded="true"
            aria-controls={`collapse-target-${key}`}
            icon={menu.icon_url}
            text={menu[I18n.getLocale()]}
            hasChevron
          />
          <div id={`collapse-target-${key}`} className="collapse" aria-labelledby={`collapse-target-${key}`} data-parent="#collapibleContent">
            {
              menu.submenus.map((submenu, subkey) => (
                <MenuItemButton isLink key={subkey} className="pl-5" text={submenu[I18n.getLocale()]} icon={submenu.icon_url} url={submenu.url} />
              ))
            }
          </div>
        </div>
      ))
    }
  </div>
)

Menu.defaultProps = {
  menues: []
}

export default Menu

