import styled from 'styled-components';
import colors from '../../theme/colors';
import layout from '../../theme/layout';

function getSize(size) {
  if (size === 'small') return layout.fontSizeSmall;
  if (size === 'big') return layout.fontSizeBig;
  return size;
}

function getColor(color) {
  return colors[color] || color;
}

const Text = styled.p`
  font-family: ${props => props.fontFamily || layout.fontDefault};
  font-size: ${props => (props.size ? getSize(props.size) : layout.fontSize)};
  color: ${props => (props.color ? getColor(props.color) : colors.text)};
  text-align: ${props => props.align || 'left'};
`;

export default Text;
