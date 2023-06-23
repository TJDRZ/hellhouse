const house = document.querySelector('#house')!;

export default function deleteHouse() {
  while (house.firstChild) {
    house.removeChild(house.firstChild);
  }
}
