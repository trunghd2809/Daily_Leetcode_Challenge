class StaffList {
  constructor() {
    this.staffList = [];
  }

  add(name, age) {
    if (age > 20) {
      const staff = this.staffList.find((staff) => staff.name === name);
      if (!staff) this.staffList.push({ name, age });
    } else {
      throw 'Parameter is not a number!';
    }
  }

  remove(name) {
    const currentIndex = this.staffList.findIndex((staff) => staff.name === name);
    if (currentIndex <= -1) return false;
    const newStaffList = [...this.staffList.slice(0, currentIndex), ...this.staffList.slice(currentIndex + 1)];
    this.staffList = newStaffList;
    return true
  }

  getSize() {
    return this.staffList.length;
  }
}

let staff = new StaffList();
staff.add('Trung', 21);
staff.add('Trung1', 22);
staff.remove('Trung1');
staff.getSize();